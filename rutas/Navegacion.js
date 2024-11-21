import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../componetes/Login/Login';
import EnviarPin from '../componetes/Login/EnviarPin';
import CambiarContrasena from '../componetes/Login/CambiarContrasena';

const Stack = createStackNavigator();

const Navegacion = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EnviarPin" component={EnviarPin} />
        <Stack.Screen name="CambiarContrasena" component={CambiarContrasena} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navegacion;