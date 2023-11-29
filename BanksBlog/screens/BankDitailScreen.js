import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native";

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';



const BankDitailScreen = ({ route }) => {
    const [selectPhoto, setSelectPhoto] = useState(null);

        useEffect(() => {
        getData(); // дані завантажені з AsyncStorage
    }, []);

    useEffect(() => {
        setData(); // Запис даних у AsyncStorage при зміні bankName, info або photo
    }, [selectPhoto]);

      const setData = async () => {
        try {
            const data = {
                selectPhoto,
            }
            const jsonData = JSON.stringify(data);
            await AsyncStorage.setItem("photoFromDitailsScreen", jsonData);
            console.log('Дані збережено AsyncStorage на CasinoHome')
        } catch (e) {
            console.log('Помилка збереження даних:', e);
        }
    };

    const getData = async () => {
        try {
            const jsonData = await AsyncStorage.getItem('photoFromDitailsScreen');
            if (jsonData !== null) {
                const parsedData = JSON.parse(jsonData);
                console.log('parsedData==>', parsedData);
                setSelectPhoto(parsedData.selectPhoto);
            }
        } catch (e) {
            console.log('Помилка отримання даних:', e);
        }
    };

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


    const { bank } = route.params;
    console.log('length', bank.id.length);
    const navigation = useNavigation();


    return (
        <View style={styles.conteiner}>

            <ImageBackground
                source={require('../assets/gameElement/bcgr3.jpeg')}
                style={styles.backgroundImg}
            >

                <ScrollView
                    style={{ marginTop: 30, marginBottom: 10, marginHorizontal: 20 }}
                //key={bank.id}
                >
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 25, marginBottom: 10 }}>
                        <Text style={{ color: '#000', fontSize: 25 }}>Bank Name:</Text> {bank.name}</Text>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                        {bank.id.length >= 2 ? (
                            <View style={{position: 'relative'}}>
                                <Image
                                    style={{ height: 280, width: 280, borderWidth: 1, borderRadius: 10, borderColor: '#000' }}
                                    source={{ uri: selectPhoto }} />
                                <TouchableOpacity
                                    onPress={()=>ImagePicer()}
                                    style={{ position: 'absolute', bottom: -15, right: -15, backgroundColor: '#fff', borderRadius: 50 }}>
                                    <Ionicons name='add-circle' style={ {fontSize: 35, color: '#103db1'}} />
                                </TouchableOpacity>
                            </View>
                            
                            ) : (
                                <View>
                                     <Image style={{ height: 280, width: 280 , borderRadius: 20, }} source={bank.photo} />
                                </View>
                       
                            )}
                        
                    </View>
                            

                    <Text style={{ fontSize: 16, color: '#000', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#000' }}>Description</Text>
                        : {bank.description}</Text>
                    <Text style={{ fontSize: 16, color: '#000', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#000' }}>History</Text>
                        : {bank.history}</Text>
                    <Text style={{ fontSize: 16, color: '#000', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#000' }}>ServicesOffered</Text>
                        : {bank.servicesOffered}</Text>
                    <Text style={{ fontSize: 16, color: '#000', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#000' }}>Financial Performance</Text>
                        : {bank.financialPerformance}</Text>
                    <Text style={{ fontSize: 16, color: '#000', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#000' }}>Stock Exchange Information</Text>
                        : {bank.stockExchangeInformation}</Text>
                    <Text style={{ fontSize: 16, color: '#000', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#000' }}>Ownership Structure</Text>
                        : {bank.ownershipStructure}</Text>
                                
                    {/**BTN  navigation to map*/}
                    <TouchableOpacity
                        disabled={bank.adress === '' ? true : false}
                        onPress={() => navigation.navigate('Map', { bankLatitude: bank.latitude, bankLongitude: bank.longitude, })}
                    >
                        <Text
                            
                            style={{ fontSize: 18, color: 'blue' }}
                        >
                            <EvilIcons name="location" style={{ color: '#FFA500', fontSize: 30 }} />
                            {bank.adress}</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/**BT goBack */}
                <TouchableOpacity
                    style={{ position: 'absolute', right: 10, bottom: 10 }}
                    onPress={() => { navigation.goBack(); }}
                >
                    <Ionicons name='arrow-back-sharp' style={ {fontSize: 35}} />
                </TouchableOpacity>

            </ImageBackground>
            
        </View>
    );
};

export default BankDitailScreen;

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

})