import React from "react";
import { View,FlatList, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { europeBanks } from "../data/europeBanks";

const EuropeBanksScreen = ({navigation}) => {
     //<Image style={{ width: 30, height: 30 }} source={ item.logo } />
    return (
        <SafeAreaView style={{marginBottom: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Europe Banks: </Text>
            <FlatList
                data={europeBanks}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                   
                        <TouchableOpacity
                        onPress={() => navigation.navigate('EUROPE DETAILS', { bankName: item.name, imageUrl: item.photo })}
                        style={{ padding: 10, justifyContent: 'center', alignItems: 'baseline' }}>
                        <Text style={{ fontSize: 18 }}>-{item.name}</Text>
                        
                    </TouchableOpacity>
                  
                    
                )}
            />
        </SafeAreaView>
    );
};

export default EuropeBanksScreen;