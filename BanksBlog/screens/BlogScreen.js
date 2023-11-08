import React,{useEffect, useState} from "react";
import {KeyboardAvoidingView, View, Text, StyleSheet,TextInput,TouchableOpacity, Modal, Pressable, SafeAreaView, FlatList, ScrollView, ImageBackground, } from "react-native";

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { uid } from 'uid';


const BlogScreen = ({navigation}) => {

    const [bankName, setBankName] = useState('');
    const [suma, setSuma] = useState('');
    const [monthPersent, setMonthPersent] = useState('');
    const [deadline, setDeadline] = useState('');
    const [data, setData] = useState([]);
    console.log('data', data)
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        getData();
    },[]);

    useEffect(() => {
        storeData()
    }, [data]);

    const storeData = async () => {
        try {
            const jsonData = JSON.stringify(data);
            await AsyncStorage.setItem('myData', jsonData);
        } catch (e) {
            // saving error
        }
    };

    const getData = async () => {
        try {
            const jsonData = await AsyncStorage.getItem("myData");
            if (jsonData !== null) {
                setData(JSON.parse(jsonData))
            }
        } catch (e) {
            console.lod(e)
        }
    };

    const handlModalClose = () => {
        setModalVisible(!modalVisible);

        setData((prev) => [
            ...prev,
            {
                id: uid(),
                name: bankName,
                summa: parseInt(suma),
                month: parseFloat(monthPersent),
                howManyMonths: deadline
            }]);
        setBankName('');
        setSuma('');
        setMonthPersent('');
        setDeadline('')
    };

    const handlBankDel = (bankName) => {

        const updData = data.filter((bank) => bank.name !== bankName);
        setData(updData)
    };


    return (
        <View style={styles.conteiner}>

            <ImageBackground
                style={styles.backgroundImg}
                source={require('../assets/gameElement/backgr.png')}
            >
                
                
                <View style={styles.subconteiner}>
                 
                    <ScrollView style={{ marginLeft: 25 }}>
                        {data.map((item) => {
                            return (<View
                                style={styles.bankInfo}
                                key={item.id}>
                                <View style={{ alignItems: 'flex-end', marginBottom: 3 }}>
                                    <TouchableOpacity
                                        style={styles.delBankBtn}
                                        onPress={() => { handlBankDel(item.name) }}
                                    >
                                        <AntDesign name="delete" style={{ color: 'red', fontSize: 20 }} />
                                    </TouchableOpacity>
                                </View>
                                
                                <Text style={styles.textInBoard}><Text style={{ fontWeight: 'bold' }}>NAME OF BANK: </Text> {item.name}</Text>
                                <Text style={styles.textInBoard}><Text style={{ fontWeight: 'bold' }}>AMOUNT: </Text> {item.summa}</Text>
                                <Text style={styles.textInBoard}><Text style={{ fontWeight: 'bold' }}>MONTHLY INTEREST: </Text> {item.month} %</Text>
                                <Text style={styles.textInBoard}><Text style={{ fontWeight: 'bold' }}>HOW LONG (month): </Text> {item.howManyMonths}</Text>
                            </View>)
                        })}
                    
                    </ScrollView>
                    

                   
                

                </View>
            </ImageBackground>
            
            {/**BTN + */}
            <Pressable
                style={styles.openModalBtn}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Entypo name="add-to-list" style={{ color: 'yellow', fontSize: 35 }} />
            </Pressable>
            
            {/**BTN BACK */}
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home')
                }}
                style={styles.goBackBtn}>
                <Ionicons name='arrow-back-sharp' style={{ color: '#000', fontSize: 35 }} />
            </TouchableOpacity>

            
            {/** MODALKA */}
            <Modal
                style={styles.modal}
                visible={modalVisible}
                transparent={true}
            ><KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                <View style={styles.modalContainer}>
                    
                        <View style={styles.modalContent}>

                        

                            <Text style={styles.text}>NAME OF BANK</Text>
                            <TextInput
                                onChangeText={setBankName}
                                value={bankName}
                                style={styles.input}
                            />

                            <Text style={styles.text}>AMOUNT</Text>
                            <TextInput
                                onChangeText={setSuma}
                                value={suma}
                                keyboardType="numeric"
                                style={styles.input}
                            />

                            <Text style={styles.text}>MONTHLY INTEREST</Text>
                            <TextInput
                                onChangeText={setMonthPersent}
                                value={monthPersent}
                                keyboardType="numeric"
                                style={styles.input}
                            />

                            <Text style={styles.text}>HOW LONG (month)</Text>
                            <TextInput
                                onChangeText={setDeadline}
                                value={deadline}
                                keyboardType="numeric"
                                style={styles.input}
                            />
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{ ...styles.saveBtn, marginTop: 29 }}
                                    activeOpacity={0.7}
                                    onPress={() => handlModalClose()}
                                >
                                    <Text style={{ fontWeight: 'bold' }}>SAVE</Text>
                                </TouchableOpacity>
                            </View>
                       

                            <Pressable
                                style={{ position: 'absolute', right: 10, top: 10 }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <AntDesign name='closecircle' style={{ fontSize: 30, color: 'red' }} />
                            </Pressable>

                        </View>

                   
                </View>
 </KeyboardAvoidingView>

            </Modal>
            
        </View>
    
    );
};

export default BlogScreen; 

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        position: 'relative',
    },
    subconteiner: {
        marginTop: 50,
        marginHorizontal: 20,
        alignItems: 'flex-start',
    },
    backgroundImg: {
        flex: 1,
        resizeMode: "cover",
    },
    text: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        width: 200,
        height: 35,
        borderColor: '#36454f',
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: 18,
        backgroundColor:'rgba(0, 0, 0, 0.6)',
        marginBottom: 10,
marginTop: 5

    },
    saveBtn: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4CAF50",
        borderRadius: 25,
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 10,
        width: 120,
        height: 40,
        
    },
    goBackBtn: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    goBackBtnTxt: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    openModalBtn: {
        position: 'absolute',
        right: 10,
        top: 40,
    },
    bankInfo: {
        //position:'relative',
        borderWidth: 2,
        borderColor: '#36454f',
        borderRadius: 5,
        marginTop: 10,
        width: '100%',
        padding: 10,
    },
    delBankBtn: {
        //position: 'absolute',
    },
    textInBoard: {
        color: '#fff',
        fontSize: 20,
    },
    modal: {
        position: 'relative',

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Півпрозорий фон
    
    },
    modalContent: {
        width: 300, // Задайте ширину вікна за своїми потребами
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 10,
        borderColor: '#fff',
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
});
{/**
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BanksBlogScreen from "../screensTab/Blog";
import BanksRegistrationScreen from "../screensTab/Registration";

const Tab = createBottomTabNavigator();

const BlogScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{ headerShown: false }} name="BanksBlog" component={BanksBlogScreen} />
            <Tab.Screen options={{ headerShown: false }} name="BanksRegistration" component={BanksRegistrationScreen} />
        </Tab.Navigator>
    )
};

export default BlogScreen; */}