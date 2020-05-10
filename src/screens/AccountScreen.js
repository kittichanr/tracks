import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.fontStyle}>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 48,
  },
});

export default AccountScreen;
