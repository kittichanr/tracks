import '../_mockLocation';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

import {SafeAreaView} from 'react-navigation';
import {useIsFocused} from '@react-navigation/native';

import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hook/useLocation';
import Map from '../components/map';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const {addLocation} = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location service</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
