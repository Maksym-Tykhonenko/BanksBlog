import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { usaBanks } from '../data/usaBanks';

const UsaBanksScreen = ({ navigation }) => {
    
    return (
        <SafeAreaView>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>USA Banks: </Text>
            <FlatList
                data={usaBanks}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        
                        onPress={() => navigation.navigate('USABANK DETAILS', { bankName: item.name })}
                        style={{ padding: 10,  justifyContent: 'center', alignItems: 'baseline'  }}>
                        <Text style={{ fontSize: 18 }}>-{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

export default UsaBanksScreen;