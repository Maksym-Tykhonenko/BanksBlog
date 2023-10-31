import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.conteiner}>
            <ImageBackground
                style={styles.backgroundImg}
                resizeMode='cover'
                source={require('../assets/gameElement/backgr.png')}
            >
                <View style={{ marginTop: 20,paddingTop:250, alignItems: 'center',}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('USA Banks')}
                        style={{ marginBottom: 20 }}>
                       <Image
                            style={{ width: 220, height: 64, }}
                            source={require('../assets/gameElement/USA.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Euro Banks')}
                        style={{  }}>
                        
                        <Image
                            style={{ width: 220, height: 64, }}
                            source={require('../assets/gameElement/Europe.png')} />
                    </TouchableOpacity>

                     {/** calculator <Text style={{ fontSize: 25, color: 'yellow' }}>Europe</Text>
                        <Text style={{ fontSize: 25, color: 'yellow' }}>USA  </Text>*/}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CreditCalculator')}
                        style={styles.colculyator}>
                        <AntDesign name="calculator" style={{ color: 'yellow', fontSize: 40 }} />
                       
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Blog')}
                        style={styles.blog}>
                        <FontAwesome5 name="blog" style={{ color: 'yellow', fontSize: 35 }} />
                       
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('News')}
                        style={{ position: 'absolute',right: 20,top: 150}}>
                        <FontAwesome name="newspaper-o" style={{ color: 'yellow', fontSize: 35 }} />
                       
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('WebViewNews')}
                        style={{ position: 'absolute', right: 20, top: 200 }}>
                        <Text style={{ color: 'yellow', fontSize: 35 }}>O</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;
{/**
<FontAwesome name="bank" style={{ color: 'yellow', fontSize: 40 }} />
<FontAwesome name="bank" style={{ color: 'yellow', fontSize: 40, }} />
*/}

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
    colculyator: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        position: 'absolute',
        right: 20,
        top: 20

    },
     blog: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        position: 'absolute',
        right: 20,
        top: 80

    }
})