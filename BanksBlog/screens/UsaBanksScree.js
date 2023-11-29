import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView,StyleSheet, ImageBackground, View, Text, SafeAreaView, FlatList, TouchableOpacity, Modal, TextInput, ScrollView, Alert, Image } from "react-native";
import { usaBanks } from '../data/usaBanks';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { uid } from 'uid';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UsaBanksScreen = ({ navigation }) => {

    const [banks, setBannks] = useState([]);
    const [addBankModalIsVisibl, setAddBankModalIsVisibl] = useState(false);
    console.log('banks', banks)

    ///////Modal STATE
    const [name, setNName] = useState('');
    const [adress, setAdress] = useState('');
    const [description, setDescription] = useState('');
    const [history, setHistory] = useState('');
    const [servicesOffered, setServicesOffered] = useState('');
    const [financialPerformance, setFinancialPerformance] = useState('');
    const [stockExchangeInformation, setStockExchangeInformation] = useState('');
    const [ownershipStructure, setOwnershipStructure] = useState('');
    const [selectPhoto, setSelectPhoto] = useState(null);
    //////////////////

    const ImagePicer = () => {
        let options = {
            storageOptios: {
                path: 'image',
            }
        };
        
        launchImageLibrary(options, response => {
             if (!response.didCancel) {
                console.log('response==>', response.assets[0].uri);
                setSelectPhoto(response.assets[0].uri)
            } else {
                console.log('Вибір скасовано');
            }
        })
    };

    const hndlClearModal = () => {
        setNName("");
        setAdress("");
        setDescription("");
        setHistory("");
        setServicesOffered("");
        setFinancialPerformance("");
        setStockExchangeInformation("");
        setOwnershipStructure("");
        setSelectPhoto(null);

        setAddBankModalIsVisibl(false)
    }

    const handlAddBank = () => {

        let newBank = {
            id: uid(),
            name,
            adress,
            description,
            history,
            servicesOffered,
            financialPerformance,
            stockExchangeInformation,
            ownershipStructure,
            photo: selectPhoto,
        };
        console.log("new bank", newBank);
        setBannks([...banks, newBank]);
        hndlClearModal();

    };

    //set & get store data

    useEffect(() => {
        getData();
    },[]);

    useEffect(() => {
        storeData()
    }, [banks]);

    removeData = async () => {
        try {
            await AsyncStorage.removeItem('addBanks')
        } catch (e) {
            // remove error
        }

        console.log('Done.')
    };

    const storeData = async () => {
        try {
            const jsonAddBanks = JSON.stringify(banks);
            await AsyncStorage.setItem('addBanks', jsonAddBanks)
        } catch (e) {
            console.log(e)
        }
    };

    const getData = async () => {
        try {
            const jsonAddBanks = await AsyncStorage.getItem('addBanks');
            if (jsonAddBanks !== null) {
                setBannks(JSON.parse(jsonAddBanks))
             }
        } catch (e) {
            console.log(e)
        }
    }
/////////////////////////////////////////////////
    const [allData, setAllData] = useState();
    useEffect(() => {
        setAllData([...banks, ...usaBanks])
    }, [banks]);

    const hndlDelBanck = (id) => {
        
        const filteredData = allData.filter(item => item.id !== id);
        setAllData(filteredData);
    };
    
    return (
        <View style={styles.conteiner}>
            <ImageBackground
                source={require('../assets/gameElement/bcgr3.jpeg')}
                style={styles.backgroundImg}
            >
               

                <View style={styles.subConteiner}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 30, color: '#103db1' }}>USA Banks: </Text>
                    
                    {/**allData list */}
                    <FlatList
                        data={allData}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                onPress={() => navigation.navigate('BankDitailScreen', { bank: item })}
                                style={{ ...styles.bank, position: 'relative' }}>
                                <Text style={{ fontSize: 18, color: '#103db1' , fontWeight: 'bold'}}>{item.name}</Text>
                                <TouchableOpacity
                                    onPress={() => hndlDelBanck(item.id)}
                                    activeOpacity={0.5}
                                    style={{ position: 'absolute', right: 5 }}
                                >
                                    <AntDesign name='minuscircleo' style={{ fontSize: 20, color: 'red', }} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                                

                        )}
                    />
                
                   

                    {/**BTN Modal open */}
                    <TouchableOpacity
                        style={{
                            alignItems: 'flex-end',
                            position: 'absolute',
                            top: 15,
                            right: 5,
                        }}
                        onPress={() => setAddBankModalIsVisibl(true)}
                    >
                        <Ionicons name='add-circle-outline' style={{ fontSize: 35, color: '#103db1' }} />
                    </TouchableOpacity>

                    {/** cлужебная кнопка ремув сторедж дата
                    <TouchableOpacity
                        style={{
                            alignItems: 'flex-end',
                            position: 'absolute',
                            top: 55,
                            right: 5,
                        }}
                        onPress={() => removeData()}
                    >
                        <Ionicons name='add-circle-outline' style={{ fontSize: 35, color: 'yellow' }} />
                    </TouchableOpacity> */}


                </View>

                {/**BTN back */}
                <TouchableOpacity
                    style={{
                        alignItems: 'flex-end',
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                    }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Ionicons name='arrow-back-sharp' style={{ fontSize: 35, }} />
                </TouchableOpacity>

                {/**Modal */}
                <Modal
                    style={styles.modal}
                    visible={addBankModalIsVisibl}
                    transparent={true}
                >
                    
                    <View style={styles.modalContainer}>
                        <ScrollView style={styles.modalContent}>
                            <KeyboardAvoidingView
                                style={{ flex: 1 }}
                                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                            >

                                <Text style={{ color: '#fff', fontSize: 18 }}> Banck name</Text>
                                <TextInput
                                    value={name}
                                    onChangeText={setNName}
                                    style={styles.input}
                                />

                                <View>
                                    {!selectPhoto ? (<TouchableOpacity
                                        onPress={() => { ImagePicer() }}
                                        style={{ marginTop: 0, marginBottom: 5, marginLeft: 50, borderWidth: 1, borderColor: 'yellow', borderRadius: 25, width: 150, height: 40, alignItems: 'center', justifyContent: 'center' }}
                                    ><Text style={{ color: 'yellow' }}>ADD PHOTO</Text>
                                        {/** <MaterialIcons name='add-photo-alternate' style={{ fontSize: 35, color: 'yellow' }} />*/}
                                    </TouchableOpacity>) : (
                                        <View style={{ width: '100%', position: 'relative' }}>
                                            <Image
                                                source={{ uri: selectPhoto }}
                                                style={{ height: 400, width: '100%' }}
                                            />
                                            
                                            <TouchableOpacity
                                                onPress={() => { ImagePicer() }}
                                                style={{ position: 'absolute', right: 5, top: 5 }}
                                            >
                                                <MaterialIcons name='change-circle' style={{ fontSize: 35, color: 'red' }} />
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                
                                </View>

                                <Text style={{ color: '#fff', fontSize: 18 }}> Adress</Text>
                                <TextInput
                                    value={adress}
                                    onChangeText={setAdress}
                                    style={styles.input}
                                />

                                <Text style={{ color: '#fff', fontSize: 18 }}> Description</Text>
                                <TextInput
                                    value={description}
                                    onChangeText={setDescription}
                                    style={styles.input}
                                />

                                <Text style={{ color: '#fff', fontSize: 18 }}> History</Text>
                                <TextInput
                                    value={history}
                                    onChangeText={setHistory}
                                    style={styles.input}
                                />

                                <Text style={{ color: '#fff', fontSize: 18 }}> Services Offered</Text>
                                <TextInput
                                    value={servicesOffered}
                                    onChangeText={setServicesOffered}
                                    style={styles.input}
                                />

                                <Text style={{ color: '#fff', fontSize: 18 }}> Financial Performance</Text>
                                <TextInput
                                    value={financialPerformance}
                                    onChangeText={setFinancialPerformance}
                                    style={styles.input}
                                />

                                <Text style={{ color: '#fff', fontSize: 18 }}> Stock Exchange Information</Text>
                                <TextInput
                                    value={stockExchangeInformation}
                                    onChangeText={setStockExchangeInformation}
                                    style={styles.input}
                                />
                                <Text style={{ color: '#fff', fontSize: 18 }}> Ownership Structure</Text>
                                <TextInput
                                    value={ownershipStructure}
                                    onChangeText={setOwnershipStructure}
                                    style={styles.input}
                                />

                           
                                {/**BTN close modal */}
                                <TouchableOpacity
                                    onPress={() => hndlClearModal()}
                                    style={{ position: 'absolute', top: 0, right: 0 }}
                                >
                                    <AntDesign name='closecircle' style={{ fontSize: 30, color: 'red' }} />
                                </TouchableOpacity>

                                {/**BTN add back */}
                                <TouchableOpacity
                                    onPress={() => handlAddBank()}
                                    style={{ marginLeft: 50, borderWidth: 1, borderColor: 'yellow', borderRadius: 25, width: 150, height: 40, marginTop: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 35 }}
                                >
                                    <Text style={{ color: 'yellow' }}>ADD BANK</Text>
                                </TouchableOpacity>
                            </KeyboardAvoidingView>
                        </ScrollView>
                        
                        
                    </View>
                    
                </Modal>

            </ImageBackground>
        </View>
    );
};

export default UsaBanksScreen;

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        //backgroundColor: 'skyblue',
        position: 'relative',
    },
    backgroundImg: {
        flex: 1,
        resizeMode: "cover",
    },
    subConteiner: {
        marginTop: 40,
        marginBottom: 10,
        alignItems: "center"
    },
    bank: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#36454f',
        borderRadius: 10,
        width: 300,
        height: 50,
        textAlignVertical: 'bottom',
        elevation: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "#36454f",
        shadowOpacity: 0.5,
        marginBottom: 10
    },
    modal: {
        position: 'relative',

    },
    modalContainer: {
        flex: 1,
        marginTop: 35,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Півпрозорий фон
    
    },
    modalContent: {
        width: "100%", // Задайте ширину вікна за своїми потребами
        backgroundColor: '#865c58',
        padding: 20,
        borderRadius: 10,
        borderColor: 'yellow',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        width: 280,
        height: 35,
        borderColor: '#36454f',
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: 18,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        marginBottom: 10,
        marginTop: 5

    },
});