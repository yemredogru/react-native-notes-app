// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StorageProvider from './src/context/storageProvider';
import HomeScreen from './src/pages/home';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <StorageProvider>
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}   options={{ title: 'Notes' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </StorageProvider>
   
  );
}

export default Router;