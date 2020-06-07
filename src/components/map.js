import React, {useContext} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
  const {
    state: {currentLocation},
  } = useContext(LocationContext);
  console.log(currentLocation);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  loading: {
    marginTop: 200,
  },
});

export default Map;
