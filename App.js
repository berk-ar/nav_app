import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from "react-native-maps";

export default function App() {

  const [region, setRegion] = useState(map_config.init)

  const onRegionChange = (region) => {
    setRegion(region)
    console.log(region)
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={map_config.init}
        style={styles.map}
        onRegionChange={onRegionChange}>
        <Marker key={1} coordinate={{
          latitude: 41.008240,
          longitude: 28.978359
        }} title='Test' description='Test' />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

const map_config = {
  init: {
    latitude: 41.008240,
    longitude: 28.978359,
    latitudeDelta: .1,
    longitudeDelta: .1
  }
} 