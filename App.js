import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AddMedicationScreen from './screens/AddMedicationScreen';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: '#87BFFF',
          tabBarActiveBackgroundColor: '#ADD7F6',
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: '#2C0EBE',
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='home' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="AddMedication" 
          component={AddMedicationScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name='plus-circle' size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
