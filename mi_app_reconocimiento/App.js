import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RegistroScreen from './screens/RegistroScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Reconocimiento Facial' }} />
        <Stack.Screen name="Registro" component={RegistroScreen} options={{ title: 'Registrar Usuario' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}