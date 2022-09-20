import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import ListsScreen from './screens/ListsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

let isLoggedIn: boolean = true;

function Content(): JSX.Element {
  return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='RecipesOverview' component={RecipesScreen} />
        <Tab.Screen name='ListsOverview' component={ListsScreen} />
      </Tab.Navigator>
  )
}

export default function App(): JSX.Element | null {

  const [fontsLoaded] = useFonts({
    'American-Typewriter-Regular': require('./assets/fonts/American-Typewriter-Regular.ttf'),
    'American-Typewriter-Light': require('./assets/fonts/American-Typewriter-Light.ttf'),
    'American-Typewriter-Medium': require('./assets/fonts/American-Typewriter-Medium.ttf'),
    'American-Typewriter-Bold': require('./assets/fonts/American-Typewriter-Bold.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          isLoggedIn ? (
            <Stack.Group>
              <Stack.Screen name='Content' component={Content} />
              <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='Register' component={RegisterScreen} />
            </Stack.Group>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
