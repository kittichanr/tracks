import {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {watchPositionAsync, Accuracy} from 'expo-location';
import Geolocation from '@react-native-community/geolocation';

export default (callback) => {
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
          callback,
        );
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  });

  return [err];
};
