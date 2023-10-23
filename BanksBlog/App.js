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


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="USA Banks" component={UsaBanksScreen} />
        <Stack.Screen name="Euro Banks" component={EuropeBanksScreen} />
        <Stack.Screen name="USABANK DETAILS" component={UsaBankDetails} />
        <Stack.Screen  name="EUROPE DETAILS" component={EuropBanksDetailsScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
};

export default App;
