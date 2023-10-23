import React from 'react';
import { View, Text, Image } from 'react-native';
import { europeBanks } from '../data/europeBanks';

const EuropBanksDetailsScreen = ({ route }) => {
    const { bankName, imageUrl } = route.params;
    console.log('imageUrl:', imageUrl)
    console.log('bankName:', bankName);
        const wordsArray = bankName.split(" ");
    console.log(wordsArray);
    const stringWithoutSpaces = wordsArray.join("");
    console.log('stringWithoutSpaces', stringWithoutSpaces);

  {/**   const imagePath = require(`../assets/${stringWithoutSpaces}(photo).jpeg`);
    const dynamicImagePath = require(imagePath);
console.log('imageKey', dynamicImagePath)
    <Image style={{ width: 100, height: 100 }} source={require(imageUrl)}/>
    
// Далі використовуємо imageKey у компоненті Image

*/}
       
    return (
        <View>
            {europeBanks.map((item) => {
                if (bankName === item.name) {
                    return (
                        <View key={item.id}>
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
                        </View>
                    )
                }
            })}
        </View>
    );
};

export default EuropBanksDetailsScreen;