// App.js
import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StorageProvider from './src/context/storageProvider';
import HomeScreen from './src/pages/home';
import LoginScreen from './src/pages/LoginScreen';
import RegisterScreen from './src/pages/RegisterScreen';
import UserProfileScreen from './src/pages/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Tab.Navigator>
         <Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{
    headerTitle: 'Home',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" color={color} size={size} />
    ),
  }}
/>
<Tab.Screen
  name="Profile"
  component={UserProfileScreen}
  options={{
    headerTitle: 'Profile',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="person" color={color} size={size} />
    ),
  }}
/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <StorageProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
  <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
  <Stack.Screen name="Home" component={HomeNavigator} />
</Stack.Navigator>

      </NavigationContainer>
    </StorageProvider>
  );
}

export default App;
