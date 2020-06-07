import '../_mockLocation';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hook/useLocation';

const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);
  const [err] = useLocation(addLocation);

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
