import React, {useContext} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text style={styles.fontStyle}>AccountScreen</Text>
      <Spacer>
        <Button onPress={signout} title="Signout" />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 48,
  },
});

export default AccountScreen;
