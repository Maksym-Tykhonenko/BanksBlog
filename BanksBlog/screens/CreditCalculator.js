import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';



const CreditCalculator = ({navigation}) => {

    const [loanAmount, setLoanAmount] = useState('');//розмір позики
    const [annualInterestRate, setAnnualInterestRate] = useState('');//річна процентна ставка
    const [loanTermMonths, setLoanTermMonths] = useState('');//термін кредиту міс
    const [monthlyPayment, setMonthlyPayment] = useState(null);//щомісячна оплата

    const calculateMonthlyPayment = () => {
        // Розрахунок щомісячного платежу тут залежно від введених даних
        // Наприклад, можна використовувати формули амортизації кредиту
        // і річну ставку для обчислення
        const loanAmountFloat = parseFloat(loanAmount);
        const annualInterestRateFloat = parseFloat(annualInterestRate);
        const loanTermMonthsInt = parseInt(loanTermMonths);

        // Ваша логіка обчислення щомісячного платежу тут

        // Приклад простого обчислення щомісячного платежу (за умови рівних платежів):
        const monthlyInterestRate = (annualInterestRateFloat / 100) / 12;
        const monthlyPayment = (loanAmountFloat * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonthsInt));
        setMonthlyPayment(monthlyPayment.toFixed(2));
      
        setLoanAmount('');
        setAnnualInterestRate('');
        setLoanTermMonths('');
    };

    return (
        <View style={styles.conteiner}>

            <ImageBackground
                style={styles.backgroundImg}
                source={require('../assets/gameElement/backgr.png')}
            >
                <View style={styles.subConteiner}>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.title}>LOAN AMOUNT <FontAwesome name="money" style={{ color: '#fff', fontSize: 30 }} /> :</Text>
                        <TextInput
                            style={styles.input}
                            value={loanAmount}
                            onChangeText={text => setLoanAmount(text)}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.title}>ANNUAL INTEREST RATE (%):</Text>
                        <TextInput
                            style={styles.input}
                            value={annualInterestRate}
                            onChangeText={text => setAnnualInterestRate(text)}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.title}>LOAN TERM (months):</Text>
                        <TextInput
                            style={styles.input}
                            value={loanTermMonths}
                            onChangeText={text => setLoanTermMonths(text)}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{
                                borderColor: 'red',
                                borderWidth: 2,
                                borderRadius: 10,
                                width: 150,
                                height: 45,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 40,
                                marginBottom: 40,
                           
                            }}
                            onPress={calculateMonthlyPayment} >
                            <LinearGradient
                                style={styles.linearGradient}
                                colors={['#FFFF00', '#FFA500', '#FF4500']}
                            >
                                <Text style={{ color: '#000', fontWeight: 'bold', paddingTop: 8, fontSize: 16, paddingLeft: 10 }}>To calculate</Text>
                            </LinearGradient>
                        
                        </TouchableOpacity>
                    </View>
                    

                    {monthlyPayment !== null && (<View style={{ marginTop: 100 }}>
                        <Text style={styles.title}>MONTLY PAYMENT:
                    
                            <Text style={{ color: 'green', fontWeight: 'bold' }}> {monthlyPayment}</Text>
                        </Text>
                    </View>
                    )}

                   
                </View>
                <TouchableOpacity
                    style={{
                        
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Ionicons name='arrow-back-sharp' style={{ color: '#000', fontSize: 35 }} />
                        
                </TouchableOpacity>

            </ImageBackground>

          
        </View>
    );
};

export default CreditCalculator;

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
        paddingHorizontal: 20,
        marginTop: 110,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: '100%'
    },
    input: {
        borderWidth: 1,
         borderRadius: 5,
         width: 200,
         height: 35,
         borderColor: '#fff',
        paddingHorizontal: 10,
        color: '#fff',
         fontSize: 18
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
        color: '#fff',

    }
})
