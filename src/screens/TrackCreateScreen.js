import '../_mockLocation';
import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/map';
import {watchPositionAsync, Accuracy} from 'expo-location';
import Geolocation from '@react-native-community/geolocation';
import {Context as LocationContext} from '../context/LocationContext';

const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      if (Platform.OS === 'ios') {
        await Geolocation.requestAuthorization();
        await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          (location) => {
            addLocation(location);
          },
        );
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  });

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location service</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
