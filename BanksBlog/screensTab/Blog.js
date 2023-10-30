import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


const BanksBlogScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is Banking Blogs Screen</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home')
                }}
                style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                }}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BanksBlogScreen;