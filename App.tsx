import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import ListsScreen from './screens/ListsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='RecipesOverview' component={RecipesScreen} />
        <Tab.Screen name='ListsOverview' component={ListsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
