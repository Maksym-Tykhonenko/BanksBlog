import React from "react";
import { View,FlatList, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { europeBanks } from "../data/europeBanks";

const EuropeBanksScreen = ({navigation}) => {
     
    return (
        <SafeAreaView>
            <Text style={{fontWeight: 'bold'}}>USA Banks: </Text>
            <FlatList
                data={europeBanks}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EUROPE DETAILS', { bankName: item.name, imageUrl: item.photo })}
                        style={{ padding: 10,  }}>
                        <Text>-{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

export default EuropeBanksScreen;