/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *
 * icon
 * font
 * get started(navigation/native)
 * createnavigationbar
 * 
 */
import *as React from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-ionicons'
import NewScreen from './screens/NewScreen';
import RecentScreen from './screens/RecentScreen';
import CatScreen from './screens/CatScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#8DEBE4"
      inactiveColor="#999"
      barStyle={{ backgroundColor: '#fbfbfb' }}
    >
      <Tab.Screen 
        name="New" 
        component={NewScreen} 
        options = {{ 
          tabBarLabel: "New",
          tabBarIcon: ({ color, size }) => (
            <Icon android="add" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Recent" 
        component={RecentScreen}
        options = {{ 
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" size={size} color={color} />
          )
        }} 
      />
      <Tab.Screen 
        name="Cat" 
        component={CatScreen} 
        options = {{ 
          tabBarLabel: "Cat",
          tabBarIcon: ({ color, size }) => (
            <Icon name="logo-octocat" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App(){
  SplashScreen.hide(); 
  return(
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
