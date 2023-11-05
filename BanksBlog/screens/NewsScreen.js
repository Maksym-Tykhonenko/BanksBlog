import React, {useEffect, useState} from "react";
import {Linking, ScrollView, View, Text, TouchableOpacity, FlatList } from "react-native";

import { uid } from 'uid';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewsScreen = ({ navigation }) => {

    const [news, setNews] = useState([])
    console.log('news ==>', news)

    useEffect(() => {
        getNews()
    }, [])

    const API_KEY = '457f28a414374255bef076ebfec01ad5';
    const url = 'https://newsapi.org/v2/top-headlines?';

    
    const getNews = () => {
        fetch(`${url}country=us&category=business&apiKey=${API_KEY}`).then((res) => res.json()).then(data => {
            console.log(data);
            setNews(data.articles)

        }).catch(e => {
            console.error(`Error: ${e}`);
        })
    }

    
    // Функція для відкриття посилання на повну статтю
    const openFullArticle = (url) => {
        Linking.openURL(url);
    };


    return (
        <View style={{ flex: 1, position: 'relative',backgroundColor: '#f5f5f5', padding: 10  }}>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                <Text style={{fontSize: 30,fontWeight: 'bold', color: 'blue' }}>News about Finans</Text>
            </View>
            
            <ScrollView style={{ flex: 1, marginTop: 20, marginHorizontal: 10, }}>
            
                {news.map((item) => {
                    return (
                        <View
                            style={{ borderWidth: 1,  borderRadius: 5 , padding: 10, marginBottom: 20,backgroundColor: 'white'}}
                            key={uid()}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}><Text style={{ fontSize: 20, fontWeight: 'bold' }}>Newspaper: </Text>{`${item.source.name}`}</Text>
                            <Text style={{ fontSize: 14 ,color: 'grey'}}><Text style={{fontWeight:'bold'}}>Author: </Text>{item.author}</Text>
                            <Text style={{ fontSize: 20 , marginTop: 5,color: 'black' }}><Text style={{fontWeight:'bold'}}>Description: </Text>{item.description}</Text>
                            <Text style={{ fontSize: 20, marginTop: 5 ,color: 'black' }}><Text style={{fontWeight:'bold'}}>Content: </Text>{item.content}</Text>
                            
                            <TouchableOpacity
                                 style={{ marginTop: 10 }}
                                onPress={() => openFullArticle(item.url)}>
                                <Text style={{ color: 'blue' }}>Read Full Article</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}

            

           
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{ position: 'absolute', bottom: 10, right: 10 }}
            >
                <Ionicons name='arrow-back-sharp' style={{ fontSize: 35, }} />
            </TouchableOpacity>
        </View>
    );
};

export default NewsScreen;