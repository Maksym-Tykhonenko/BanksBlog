import React from 'react';
import { View, Text } from 'react-native';
import { usaBanks } from '../data/usaBanks';

const UsaBankDetails = ({ route }) => {

    const { bankName } = route.params;
    console.log(bankName)

    return (
        <View>
            <Text style={{fontWeight: 'bold', marginBottom: 10}}>Bank Name: {bankName}</Text>
            {usaBanks.map((item) => {
                if (bankName === item.name) {
                    return (
                        <View key={item.id}>
                            <Text style={{marginBottom: 10}}><Text style={{fontWeight: 'bold'}}>Description</Text>: {item.description}</Text>
                            <Text style={{marginBottom: 10}}><Text style={{fontWeight: 'bold'}}>History</Text>: {item.history}</Text>
                            <Text style={{marginBottom: 10}}><Text style={{fontWeight: 'bold'}}>ServicesOffered</Text>: {item.servicesOffered}</Text>
                            <Text style={{marginBottom: 10}}><Text style={{fontWeight: 'bold'}}>Financial Performance</Text>: {item.financialPerformance}</Text>
                            <Text style={{marginBottom: 10}}><Text style={{fontWeight: 'bold'}}>Stock Exchange Information</Text>: {item.stockExchangeInformation}</Text>
                            <Text style={{marginBottom: 10}}><Text style={{fontWeight: 'bold'}}>Ownership Structure</Text>: {item.ownershipStructure}</Text>
                        </View>
                    )
                }
            })}
        </View>
    );
};

export default UsaBankDetails;
