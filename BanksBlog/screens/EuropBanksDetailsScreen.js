import React from 'react';
import {StyleSheet,ImageBackground, View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MapScreen from './MapScreen';
import { europeBanks } from '../data/europeBanks';

const EuropBanksDetailsScreen = ({ route, navigation }) => {
    
    const { bankName, imageUrl } = route.params;

  
       
    return (
        <View style={styles.conteiner}>
            <ImageBackground
                source={require('../assets/gameElement/backgr.png')}
                style={styles.backgroundImg}
            >
                {europeBanks.map((item) => {
                    if (bankName === item.name) {
                        return (
                            <ScrollView
                                style={{ marginTop: 30, marginBottom: 10 , marginHorizontal: 20}}
                                key={item.id}
                            >
                                <Text style={{ color: '#495B69', fontWeight: 'bold', fontSize: 25, marginBottom: 10 }}>
                                    <Text style={{color: '#fff', fontSize: 25}}>Bank Name:</Text> {item.name}</Text>

                                <View style={{ alignItems: 'center', justifyContent: 'center' , marginBottom: 10}}>
                                    <Image style={{ height: 280, width: 280 }} source={item.photo} />
                                </View>
                            

                                <Text style={{fontSize:16, color: '#495B69', marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold',color:'#fff' }}>Description</Text>
                                    : {item.description}</Text>
                                <Text style={{fontSize:16, color: '#495B69', marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold',color:'#fff' }}>History</Text>
                                    : {item.history}</Text>
                                <Text style={{fontSize:16, color: '#495B69', marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold',color:'#fff' }}>ServicesOffered</Text>
                                    : {item.servicesOffered}</Text>
                                <Text style={{fontSize:16, color: '#495B69', marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold',color:'#fff' }}>Financial Performance</Text>
                                    : {item.financialPerformance}</Text>
                                <Text style={{fontSize:16, color: '#495B69', marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold',color:'#fff' }}>Stock Exchange Information</Text>
                                    : {item.stockExchangeInformation}</Text>
                                <Text style={{fontSize:16, color: '#495B69', marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold',color:'#fff' }}>Ownership Structure</Text>
                                    : {item.ownershipStructure}</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Map', { bankLatitude: item.latitude, bankLongitude: item.longitude })}
                                >
                                    <Text style={{fontSize:18, color: 'blue' }}>
                                        <EvilIcons name="location" style={{ color: '#FFA500', fontSize: 30 }} />
                                        {item.adress}</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        )
                    }
                })}

                <TouchableOpacity
                    onPress={()=>{navigation.navigate("Euro Banks")}}
                    style={{ alignItems: 'flex-end', marginRight: 10, marginBottom: 5 }}>
                    <Ionicons name='arrow-back-sharp' style={ {fontSize: 35}} />
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );
};
{/** */ }
export default EuropBanksDetailsScreen;

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
});