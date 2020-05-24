import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({headerText, errMessage, onSubmit, submitButtonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errMessage ? <Text style={styles.errMessage}>{errMessage}</Text> : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({email, password})}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errMessage: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 5,
  },
});

export default AuthForm;
