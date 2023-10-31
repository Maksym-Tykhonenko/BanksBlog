import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native";

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

const BankDitailScreen = ({ route }) => {
    const { bank } = route.params;
console.log('length',bank.id.length)
    const navigation = useNavigation();


    return (
        <View style={styles.conteiner}>

            <ImageBackground
                source={require('../assets/gameElement/backgr.png')}
                style={styles.backgroundImg}
            >

                <ScrollView
                    style={{ marginTop: 30, marginBottom: 10, marginHorizontal: 20 }}
                //key={bank.id}
                >
                    <Text style={{ color: '#495B69', fontWeight: 'bold', fontSize: 25, marginBottom: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 25 }}>Bank Name:</Text> {bank.name}</Text>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                        {bank.id.length >= 2 ? (<Image style={{ height: 280, width: 280, borderWidth: 1,borderRadius: 10,borderColor: '#fff' }}
                            source={{ uri: bank.photo }} />) : (
                        <Image style={{ height: 280, width: 280 , borderRadius: 20, }} source={bank.photo} />
                            )}
                        
                    </View>
                            

                    <Text style={{ fontSize: 16, color: '#495B69', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Description</Text>
                        : {bank.description}</Text>
                    <Text style={{ fontSize: 16, color: '#495B69', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>History</Text>
                        : {bank.history}</Text>
                    <Text style={{ fontSize: 16, color: '#495B69', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>ServicesOffered</Text>
                        : {bank.servicesOffered}</Text>
                    <Text style={{ fontSize: 16, color: '#495B69', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Financial Performance</Text>
                        : {bank.financialPerformance}</Text>
                    <Text style={{ fontSize: 16, color: '#495B69', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Stock Exchange Information</Text>
                        : {bank.stockExchangeInformation}</Text>
                    <Text style={{ fontSize: 16, color: '#495B69', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Ownership Structure</Text>
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