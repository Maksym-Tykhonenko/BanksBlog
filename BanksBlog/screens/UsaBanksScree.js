import React from "react";
import { StyleSheet, ImageBackground, View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { usaBanks } from '../data/usaBanks';

import Ionicons from 'react-native-vector-icons/Ionicons';

const UsaBanksScreen = ({ navigation }) => {
    
    
    return (
        <View style={styles.conteiner}>
            <ImageBackground
                source={require('../assets/gameElement/backgr.png')}
                style={styles.backgroundImg}
            >
                <View style={styles.subConteiner}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 30, color:'#fff' }}>USA Banks: </Text>
                    <FlatList
                        data={usaBanks}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                        
                                onPress={() => navigation.navigate('USABANK DETAILS', { bankName: item.name })}
                                style={styles.bank}>
                                <Text style={{ fontSize: 18, color: '#fff' }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />

                        <TouchableOpacity
                        style={{
                            alignItems: 'flex-end',
                            position: 'absolute',
                            top: 580,
                            right: 5,
                        }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Ionicons name='arrow-back-sharp' style={ {fontSize: 35}} />
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
        </View>
    );
};

export default UsaBanksScreen;

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        //backgroundColor: 'skyblue',
        position: 'relative',
    },
    backgroundImg: {
        flex: 1,
        resizeMode: "cover",
    },
    subConteiner: {
          marginTop: 40,
        marginBottom: 10,
        alignItems: "center"
    },
    bank: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#36454f',
        borderRadius: 10,
        width: 300,
        height: 50,
        textAlignVertical: 'bottom',
        elevation: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "#36454f",
        shadowOpacity: 0.5,
        marginBottom: 10
    }
});