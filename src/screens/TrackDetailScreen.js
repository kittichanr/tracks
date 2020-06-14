import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({route, navigation}) => {
  const {state} = useContext(TrackContext);
  const {_id} = route.params;

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Text style={styles.fontStyle}>{track.name}</Text>
      <MapView
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}>
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 48,
  },
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
