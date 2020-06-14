import React, {useEffect, useContext} from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {
  const {state, fetchTracks} = useContext(TrackContext);

  useEffect(() => {
    navigation.addListener('focus', fetchTracks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
  return (
    <>
      <Text style={styles.fontStyle}>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 48,
  },
});

export default TrackListScreen;
