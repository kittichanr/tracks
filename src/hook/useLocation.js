import {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {watchPositionAsync, Accuracy} from 'expo-location';
import Geolocation from '@react-native-community/geolocation';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        if (Platform.OS === 'ios') {
          await Geolocation.requestAuthorization();
          subscriber = await watchPositionAsync(
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

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldTrack, callback]);

  return [err];
};
