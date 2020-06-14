import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import {Provider as AuthProvider, Context} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TrackList() {
  return (
    <Stack.Navigator initialRouteName="Tracks">
      <Stack.Screen name="Tracks" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  const {state} = useContext(Context);

  if (state.isLoading) {
    return <ResolveAuthScreen />;
  }
  return (
    <NavigationContainer>
      {!state.token ? (
        <Stack.Navigator>
          {/* <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} /> */}
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator initialRouteName="TrackList">
          <Tab.Screen
            name="Tracks"
            component={TrackList}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="th-list" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Add Track"
            component={TrackCreateScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="add" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="gear" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
