// import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import EditItems from '../components/EditItems';
import Welcome from '../screens/Welcome';
import SignIn from '../screens/UserApp/SignIn';
import SignUp from '../screens/UserApp/SignUp';
import Home from '../screens/UserApp/Home';


const Stack = createNativeStackNavigator();
const AppNavigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="EditItems" component={EditItems} />
        {/* User Screens */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigators;
