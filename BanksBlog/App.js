import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import UsaBanksScreen from './screens/UsaBanksScree';
import EuropeBanksScreen from './screens/EuropeBanksScreen';
import UsaBankDetails from './screens/UsaBankDetailsScreen';
import EuropBanksDetailsScreen from './screens/EuropBanksDetailsScreen';
import BlogScreen from './screens/BlogScreen';
import CreditCalculator from './screens/CreditCalculator';
import AddBankDitailsScreen from './screens/AddBankDitailsScreen';
import NewsScreen from './screens/NewsScreen';
import BankDitailScreen from './screens/BankDitailScreen';
import WebViewNews from './screens/WebViewNews';

import MapScreen from './screens/MapScreen';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="USA Banks" component={UsaBanksScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Euro Banks" component={EuropeBanksScreen} />
        <Stack.Screen options={{ headerShown: false }} name="USABANK DETAILS" component={UsaBankDetails} />
        <Stack.Screen options={{ headerShown: false }} name="EUROPE DETAILS" component={EuropBanksDetailsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Map" component={MapScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CreditCalculator" component={CreditCalculator} />
        <Stack.Screen options={{ headerShown: false }} name="Blog" component={BlogScreen} />
        <Stack.Screen options={{ headerShown: false }} name="AddBankDitailsScreen" component={AddBankDitailsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="News" component={NewsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="BankDitailScreen" component={BankDitailScreen} />

        <Stack.Screen options={{ headerShown: false }} name="WebViewNews" component={WebViewNews} />
      </Stack.Navigator>

      
    </NavigationContainer>
    
  );
};



export default App;
