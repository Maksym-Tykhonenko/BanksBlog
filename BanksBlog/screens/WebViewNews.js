import React from "react";
import { Alert, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';



const WebViewNews = () => {
const navigation = useNavigation();

    const fetchHorses = async () => {
        //Alert.alert('FETCH');
        const url = 'https://uk-betting-odds.p.rapidapi.com/v1/horse_racing/odds/?bookmakers=bet365%2Csky_bet';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7d51e73040msh7aa4f9aaad55d65p1b53d5jsnc99aab00f28f',
                'X-RapidAPI-Host': 'uk-betting-odds.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log('result==>', result);
        } catch (error) {
            console.error(error);
        }
    };
{/**
 fetch()
            .then((res) => res.jso())
            .then(data => {
                console.log("DATA", data);
            }); */}

    return (
        <SafeAreaView>
            <Text>WebViewNews</Text>
            <TouchableOpacity>
                <Text onPress={fetchHorses}>Fetch Horses</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text onPress={()=> navigation.goBack()}>goBack</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default WebViewNews;