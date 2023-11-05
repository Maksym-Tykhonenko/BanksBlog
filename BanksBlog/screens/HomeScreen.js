import React, {useState,useEffect} from "react";
import { TextInput, View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, Modal, ScrollView } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { uid } from 'uid';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({ navigation }) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [writingUsername, setWritingUsername] = useState('');
    const [username, setUsername] = useState('')
    const [photo, setPhoto] = useState(null);
    const [isFormAddBankVisible, setIsFormAddBankVisible] = useState(false)
    const [selectedData, setSelectedData] = useState('');
    const [bankName, setBankName] = useState('');
    const [address, setAddress] = useState('');

    const [info, setInfo] = useState('');
    console.log('info==>', info);

  useEffect(() => {
        getData(); // Витягнути дані під час завантаження компонента
    }, []);
    

    useEffect(() => {
        saveData(); // Запис даних у AsyncStorage при зміні bankName, info або photo
    }, [username, info, photo]);


    // Функція для збереження даних у AsyncStorage
    const saveData = async () => {
            try {
                const data = {
                    username,
                    info,
                    photo
                };

                const jsonData = JSON.stringify(data);
                await AsyncStorage.setItem('yourData', jsonData);
                console.log('Дані збережено AsyncStorage');
            } catch (e) {
                console.log('Помилка збереження даних:', e);
            }
    };
    
    // Функція для отримання даних з AsyncStorage
    const getData = async () => {
        try {
            const jsonData = await AsyncStorage.getItem('yourData');
            if (jsonData !== null) {
                const parsedData = JSON.parse(jsonData);
                console.log('parsedData==>', parsedData)
                setUsername(parsedData.username);
                setInfo(parsedData.info);
                setPhoto(parsedData.photo);
                console.log('Дані витягнуті з AsyncStorage');
            }
        } catch (error) {
            console.error('Помилка отримання даних:', e);
        }
    };
  

    //////////////////////////////////////////
    const selectBankWherIBeen = () => {
        let newBank = {
            bankName,
            address,
            selectedData,
            id: uid(),
        };

        setInfo([newBank, ...info]);
        setIsFormAddBankVisible(!isFormAddBankVisible);
        setAddress('');
        setBankName('');
    }

    const ImagePicer = () => {
        let options = {
            storageOptios: {
                path: 'image',
            }
        };
        
        launchImageLibrary(options, response => {
            //console.log('response==>', response.assets[0].uri);
            setPhoto(response.assets[0].uri)
        })
    };

    return (
        <View style={styles.conteiner}>
            <ImageBackground
                style={styles.backgroundImg}
                resizeMode='cover'
                source={require('../assets/gameElement/backgr.png')}
            >
                <View style={{ marginTop: 20, paddingTop: 250, alignItems: 'center', }}>
                    
                    {/**Back's BT */}
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('USA Banks')}
                            style={{ marginBottom: 20 }}>
                            <Image
                                style={{ width: 220, height: 64, }}
                                source={require('../assets/gameElement/USA.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Euro Banks')}
                            style={{}}>
                        
                            <Image
                                style={{ width: 220, height: 64, }}
                                source={require('../assets/gameElement/Europe.png')} />
                        </TouchableOpacity>
                        
                    </View>
                    
                    
                    {/** Positio absolut BT */}
                    <View style={{ flexDirection: 'row', position: 'absolute', top: 30 }}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('CreditCalculator')}
                            style={{ ...styles.colculyator, }}>
                            <AntDesign name="calculator" style={{ color: '#fff', fontSize: 40 }} />
                       
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Blog')}
                            style={{ ...styles.blog, marginLeft: 40 }}>
                            <FontAwesome5 name="blog" style={{ color: '#fff', fontSize: 40 }} />
                       
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('News')}
                            style={{ marginLeft: 40 }}>
                            <FontAwesome name="newspaper-o" style={{ color: '#fff', fontSize: 40 }} />
                       
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setIsModalVisible(true)}
                            style={{ marginLeft: 40 }}>
                            <MaterialCommunityIcons name='face-recognition' style={{ color: '#fff', fontSize: 35 }} />
                       
                        </TouchableOpacity>

                    </View>

                    {/** MODAL */}
                    <Modal
                        transparent={false}
                        visible={isModalVisible}
                    >
                        <View style={{ position: 'relative', flex: 1, paddingTop: 30, paddingHorizontal: 10 , backgroundColor: '#000'}}>
                            <ScrollView>
                           
                                
                                <View>
 
                                    {!username ? (
                                        <View><Text style={{marginLeft: 5,marginBottom: 10,fontWeight: 'bold',fontSize: 25, color:'#fff'}}>Tipe name :</Text>
                                            <TextInput
                                                value={writingUsername}
                                                onChangeText={setWritingUsername}
                                                style={{ marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1,borderColor: '#fff',color:'#fff', borderRadius: 10, width: 200, height: 40 }}
                                            />
                                            <TouchableOpacity
                                                style={{borderWidth: 3,borderColor: '#FFA500', borderRadius:10, width:150, height: 40,justifyContent: 'center',alignItems: 'center'}}
                                                onPress={() => setUsername(writingUsername)}
                                            >
                                                <View>
                                                    <Text style={{fontSize: 25, color:'#fff'}}>Save name</Text>
                                                </View>
                                            
                                            </TouchableOpacity></View>
                                    ) : (
                                        <Text style={{marginLeft: 10,marginBottom: 10,fontSize: 35, fontWeight: 'bold', color:'#fff'}}>{username}</Text>
                                    )}
                                    
                                </View>
                            
                                <View style={{}}>
                                    {!photo ? (<TouchableOpacity
                                        onPress={() => ImagePicer()}
                                        style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderRadius: 10,borderColor:'#FFA500', width: 150, height: 40, marginBottom: 20 ,marginTop: 20}}>
                                        <Text style={{fontSize: 25,color:'#fff'}}>Add Photo</Text>
                                    </TouchableOpacity>) : (
                                        <Image
                                            style={{ width: 150, height: 150, borderRadius: 10, marginBottom: 20 }}
                                            source={{ uri: photo }} />
                                    )}
                            
                                </View>
                            
                                {isFormAddBankVisible ? (
                                    <View style={{ marginBottom: 30 }}>

                                   
                                        <TextInput
                                            placeholder='Bank Name'
                                            value={bankName}
                                            onChangeText={setBankName}
                                            style={{ marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1,borderColor: '#fff',color:'#fff', borderRadius: 10, width: 200, height: 40 }}
                                        />
                                        <TextInput
                                            placeholder="Address"
                                            value={address}
                                            onChangeText={setAddress}
                                            style={{ marginBottom: 15, paddingLeft: 10, fontSize: 20, borderWidth: 1, borderRadius: 10,borderColor: '#fff',color:'#fff', width: 200, height: 40 }}
                                        />

                                        
                                        {/**Caledar */}
                                        <Calendar
                                            onDayPress={day => {
                                                setSelectedData(day.dateString);
                                            }}
                                            markedDates={{
                                                [selectedData]: { selectedData: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                            }}
                                        />
                                    
                                        <TouchableOpacity
                                            style={{ borderWidth: 1, borderRadius: 10,borderColor:'#fff', width: 100, height: 40, alignItems: 'center', justifyContent: 'center' , marginTop: 15}}
                                            onPress={() => selectBankWherIBeen()
                                                
                                            }
                                        >
                                            <Text style={{color:'#fff', fontWeight:'bold'}}>ADD</Text>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <TouchableOpacity
                                        style={{ marginBottom: 10 , borderWidth: 3, borderColor: '#FFA500', borderRadius: 5, width: 280, height:40, justifyContent: 'center', alignItems: 'center'}}
                                        onPress={() => setIsFormAddBankVisible(!isFormAddBankVisible)}
                                    >
                                        <Text style={{fontWeight: 'bold', color:'#fff'}}>Add bank which I have been visited <AntDesign name="arrowdown" style={{ color: '#fff', fontSize: 20 , }} /></Text>
                                    </TouchableOpacity>
                                )}
                           
                                {info ? (
                                    <View>
                                        {info.map((item) => {
                                            return (
                                                <View
                                                    style={{ marginBottom: 20 }}
                                                    key={item.id}>
                                                    <Text style={{marginLeft:5, fontSize:14, color:'#808080'}}>{item.selectedData}</Text>
                                                    <Text style={{ fontSize:18, color:'#fff'}}>Bank Name :<Text style={{fontWeight: 'bold'}}> {item.bankName}</Text></Text>
                                                    <Text style={{ fontSize:18, color:'#fff'}}>Address :<Text style={{fontWeight: 'bold'}}>{item.address}</Text></Text>
                                                </View>
                                            )
                                        })}
                                    </View>
                                ) : (
                                    <View></View>
                                )}
                            

                            </ScrollView>



                            <TouchableOpacity
                                style={{ position: 'absolute', right: 20, top: 20 }}
                                onPress={() => setIsModalVisible(false)}
                            >
                                <AntDesign name='closecircleo' style={{fontSize: 30, color: '#fff'}} />
                            </TouchableOpacity>

                        </View>
                    </Modal>
                    

                </View>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;


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
    colculyator: {
        justifyContent: 'center',
        alignItems: 'center',
        

    },
     blog: {
        justifyContent: 'center',
        alignItems: 'center',
        

    }
})