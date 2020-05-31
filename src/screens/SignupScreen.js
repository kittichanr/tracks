import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation}) => {
  navigation.setOptions({
    header: () => null,
  });
  const {state, signup} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up For Tracker"
        errMessage={state.errMessage}
        onSubmit={({email, password}) => signup({email, password})}
        submitButtonText="Sign Up"
      />
      <NavLink
        text="Already have an account?, Sign in instead!"
        routeName="Signin"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SignupScreen;
