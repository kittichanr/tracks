import {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {watchPositionAsync, Accuracy} from 'expo-location';
import Geolocation from '@react-native-community/geolocation';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      if (Platform.OS === 'ios') {
        await Geolocation.requestAuthorization();
        const sub = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback,
        );
        setSubscriber(sub);
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldTrack, callback]);

  return [err];
};
