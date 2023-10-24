import React from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', }}>
            
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('USA Banks')}
                    style={{justifyContent: 'center',alignItems: 'center', borderWidth: 1, borderRadius: 15, marginBottom: 10, width: 150, height: 70 }}>
                    <Text style={{fontSize: 25}}>USA  <FontAwesome name="bank" style={{ color: '#000', fontSize: 40,  }} /></Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('Euro Banks')}
                    style={{justifyContent: 'center',alignItems: 'center', borderWidth: 1, borderRadius: 15,marginTop: 10, width: 150, height: 70 }}>
                    <Text style={{fontSize: 25}}>Europe<FontAwesome name="bank" style={{ color: '#000', fontSize: 40 }} /></Text>
                </TouchableOpacity>

                {/** calculator*/}
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Test')}
                    style={{justifyContent: 'center',alignItems: 'center', marginTop: 10, width: 120, height: 50, position: 'absolute', bottom: 300, left: 140 }}>
                    <AntDesign name="calculator" style={{ color: '#000', fontSize: 40 }} />
                </TouchableOpacity>
                
            </View>
        </View>
    );
};

export default HomeScreen;