import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const SigninScreen = ({navigation}) => {
  navigation.setOptions({
    header: () => null,
  });

  const {state, signin, clearErrorMessage} = useContext(Context);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', clearErrorMessage);
    return unsubscribe;
  });
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        onSubmit={signin}
        errMessage={state.errMessage}
        submitButtonText="Signin"
      />
      <NavLink
        text="Dont have an account ? Sign up instead"
        routeName="Signup"
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

export default SigninScreen;
