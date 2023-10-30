import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";


const BanksRegistrationScreen = ({ navigation }) => {
    
    const [bankName, setBankName] = useState('');
    const [suma, setSuma] = useState('');
    const [monthPersent, setMonthPersent] = useState('');
    const [deadline, setDeadline] = useState('');
    const [data, setData] = useState(null);
    console.log('data', data)

    return (
        <View style={styles.conteiner}>
            <View style={styles.subconteiner}>

                <Text style={styles.text}>BANK NAME</Text>
                <TextInput
                    onChangeText={setBankName}
                    value={bankName}
                    style={styles.input}
                />

                <Text style={styles.text}>Яку сумму я хочу взяти</Text>
                <TextInput
                    onChangeText={setSuma}
                    value={suma}
                    keyboardType="numeric"
                    style={styles.input}
                />

                <Text style={styles.text}>Який місячний % проп банк</Text>
                <TextInput
                    onChangeText={setMonthPersent}
                    value={monthPersent}
                    keyboardType="numeric"
                    style={styles.input}
                />

                <Text style={styles.text}>На який термін</Text>
                <TextInput
                    onChangeText={setDeadline}
                    value={deadline}
                    keyboardType="numeric"
                    style={styles.input}
                />

                <TouchableOpacity
                    style={{ ...styles.saveBtn, marginTop: 29 }}
                    activeOpacity={0.7}
                    onPress={() => {}}
                >
                    <Text>Зберігти</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home')
                }}
                style={styles.goBackBtn}>
                <Text style={styles.goBackBtnTxt}>Back</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default BanksRegistrationScreen;

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        position: 'relative',
    },
    subconteiner: {
        marginTop: 30,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    backgroundImg: {
        
    },
    text: {
        fontSize: 20,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        height: 35,
        borderColor: '#000',
        paddingHorizontal: 10,
        color: '#000',
        fontSize: 18


    },
    saveBtn: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4CAF50",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 10,
        width: 160,
        height: 50,
        
    },
    goBackBtn: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    goBackBtnTxt: {
        paddingHorizontal: 10,
        paddingVertical:5
    }
    
});