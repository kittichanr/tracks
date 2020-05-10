import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SigninScreen = () => {
  return (
    <View>
      <Text style={styles.fontStyle}>SigninScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 48,
  },
});

export default SigninScreen;
