import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import MapScreen from './MapScreen';
import { europeBanks } from '../data/europeBanks';

const EuropBanksDetailsScreen = ({ route, navigation }) => {
    
    const { bankName, imageUrl } = route.params;

  
       
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {europeBanks.map((item) => {
                if (bankName === item.name) {
                    return (
                        <ScrollView key={item.id}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Bank Name: {item.name}</Text>

                            <Image style={{ width: 200, height: 200 }} source={item.photo} />

                            <Text style={{ marginBottom: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Description</Text>
                                : {item.description}</Text>
                            <Text style={{ marginBottom: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>History</Text>
                                : {item.history}</Text>
                            <Text style={{ marginBottom: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>ServicesOffered</Text>
                                : {item.servicesOffered}</Text>
                            <Text style={{ marginBottom: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Financial Performance</Text>
                                : {item.financialPerformance}</Text>
                            <Text style={{ marginBottom: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Stock Exchange Information</Text>
                                : {item.stockExchangeInformation}</Text>
                            <Text style={{ marginBottom: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Ownership Structure</Text>
                                : {item.ownershipStructure}</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Map', {bankLatitude: item.latitude, bankLongitude: item.longitude})}
                            >
                                <Text style={{ color: 'blue' }}>
                                     <EvilIcons name="location" style={{ color: 'red', fontSize: 30 }} />
                                    {item.adress}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    )
                }
            })}
        </SafeAreaView>
    );
};
{/** */ }
export default EuropBanksDetailsScreen;