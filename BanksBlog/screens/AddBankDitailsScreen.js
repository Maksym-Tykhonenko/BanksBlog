import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native";

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddBankDitailsScreen = ({ route, navigation }) => {
    const { bank } = route.params;
    console.log('bank==> ', bank)
    console.log('bankPhoto==> ', bank.photo)


    //const {photo, name } = bank;

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
                        <Image style={{ height: 280, width: 280 }}
                            source={{ uri: bank.photo }} />
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
                        onPress={() => navigation.navigate('Map', { bankLatitude: bank.latitude, bankLongitude: bank.longitude, ref: myRef })}
                    >
                        <Text
                            
                            style={{ fontSize: 18, color: 'blue' }}
                        >
                            <EvilIcons name="location" style={{ color: '#FFA500', fontSize: 30 }} />
                            {bank.adress}</Text>
                    </TouchableOpacity>
                </ScrollView>

                <TouchableOpacity
                    style={{ position: 'absolute', right: 10, bottom: 10 }}
                    onPress={() => { navigation.navigate("USA Banks") }}
                >
                    <Ionicons name='arrow-back-sharp' style={ {fontSize: 35}} />
                </TouchableOpacity>

            </ImageBackground>
            
        </View>
    );
};

export default AddBankDitailsScreen;

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