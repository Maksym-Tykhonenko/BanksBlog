import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
//CreditCalculator
const Test = () => {

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
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={styles.title}>Сума кредиту <Text style={{color: 'green'}}>$</Text>:</Text>
            <TextInput
                style={styles.input}
                value={loanAmount}
                onChangeText={text => setLoanAmount(text)}
                keyboardType="numeric"
            />

            <Text style={styles.title}>Річна ставка <Text style={{color: 'blue'}}>(%)</Text>:</Text>
            <TextInput
                style={styles.input}
                value={annualInterestRate}
                onChangeText={text => setAnnualInterestRate(text)}
                keyboardType="numeric"
            />

            <Text style={styles.title}>Термін кредиту (місяці):</Text>
            <TextInput
                style={styles.input}
                value={loanTermMonths}
                onChangeText={text => setLoanTermMonths(text)}
                keyboardType="numeric"
            />

            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    width: 150,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 40,
                    marginBottom: 40,
                }}
                onPress={calculateMonthlyPayment} >
                <Text>Розрахувати</Text>
            </TouchableOpacity>

            {monthlyPayment !== null && (
                <Text style={styles.title}>Щомісячний платіж:
                    
                    <Text style={{ color: 'green' }}> ${monthlyPayment}</Text>
                </Text>
            )}
        </View>
    );
};

export default Test;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, borderRadius: 5, width: 150, height: 30, borderColor: '#6a7fa9', paddingHorizontal:10
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
        color: '#6a7fa9',

    }
})
