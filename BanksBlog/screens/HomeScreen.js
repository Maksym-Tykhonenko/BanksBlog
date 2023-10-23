import React from "react";
import { View, Text, TouchableOpacity, } from "react-native";

const HomeScreen = ({navigation}) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('USA Banks')}
                    style={{ borderWidth: 1, borderRadius: 5, marginBottom: 10, width: 120, height: 30 }}>
                    <Text>{'<-'} USA Back's </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('Euro Banks')}
                    style={{ borderWidth: 1, borderRadius: 5, width: 120, height: 30 }}>
                    <Text style={{}}>Europe Back's{'->'} </Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
};

export default HomeScreen;