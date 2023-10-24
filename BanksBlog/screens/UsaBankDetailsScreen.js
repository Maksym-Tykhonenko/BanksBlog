import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { usaBanks } from '../data/usaBanks';

const UsaBankDetails = ({ route }) => {

    const { bankName } = route.params;
    console.log(bankName)

      
    return (
        <View>
            {usaBanks.map((item) => {
                if (bankName === item.name) {
                    return (
                        <ScrollView key={item.id}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Bank Name: {item.name}
                            <Image style={{ width: 30, height: 30 }} source={ item.logo } />
                            </Text>

                            <Image style={{ width: 200, height: 200 }} source={ item.photo } />

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
                        </ScrollView>
                    )
                }
            })}
        </View>
    );
};

export default UsaBankDetails;
