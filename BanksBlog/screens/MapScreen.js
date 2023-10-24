import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import MapView, { Marker, Circle } from 'react-native-maps';


const MapScreen = ({route}) => {
    const {bankLatitude, bankLongitude} = route.params;
    console.log('bankLatitude', bankLatitude);
    console.log('bankLongitude', bankLongitude)

    const [cordinates, setCordinates] = useState([{latitude: bankLatitude, longitude: bankLongitude,}]);
    

    //useEffect(() => {
    //    setLatitude(bankLatitude);
    //    setLongitude(bankLongitude);
    //})

    //console.log('latitude', latitude);
    //console.log('longitude', longitude)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {cordinates.map(item => (
                    <MapView
                        key={item.latitude}
                        style={{ flex: 1 }}
                        region={{
                            latitude: item.latitude,//широта
                            longitude: item.longitude,//довгота 
                            latitudeDelta: 0.0392,//Дельта широти:
                            longitudeDelta: 0.0021,//дельта довготи
                        }}
                        zoomEnabled={true}
                        showsUserLocation
                        showsMyLocationButton
                        userLocationCalloutEnabled
                        showsCompass
                    >
                    
                        <Marker
                            key={item.latitude}
                            coordinate={{ latitude: item.latitude, longitude: item.longitude }} />
                   
                        <Circle
                            center={{ latitude: item.latitude, longitude: item.longitude }}
                            radius={500}
                            fillColor={'rgba(0, 191, 255, 0.5)'}
                        />
                    
                    </MapView>
                ))}
            </View>
        </SafeAreaView>
        
    );
};
{/**
      latitude: 51.498453909230015,//широта
                        longitude: -0.09593878537319506,//довгота 
*/}
export default MapScreen;