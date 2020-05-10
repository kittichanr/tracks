import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.fontStyle}>TrackListScreen</Text>
      <Button
        title="Go to TrackDetail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 48,
  },
});

export default TrackListScreen;
