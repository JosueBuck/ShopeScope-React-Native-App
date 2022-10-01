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
import IonIconIcon from './components/icons/IonIconIcon';
import { colors } from './assets/globalStyling/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

let isLoggedIn: boolean = true;

function TabNavigation(): JSX.Element {
  return (
      <Tab.Navigator initialRouteName='Home' screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {fontFamily: 'American-Typewriter-Medium'},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'RecipesOverview') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'ListsOverview') {
            iconName = focused ? 'ios-receipt' : 'ios-receipt-outline';
          } 
          
          return <IonIconIcon name={iconName} size={size} color={color} />
        },
        tabBarInactiveTintColor: colors.grey,
        tabBarActiveTintColor: colors.grey
      })}>
        <Tab.Screen options={{title: 'Recipes'}} name='RecipesOverview' component={RecipesScreen} />
        <Tab.Screen options={{title: 'Home'}} name='Home' component={HomeScreen} />
        <Tab.Screen options={{title: 'Lists'}} name='ListsOverview' component={ListsScreen} />
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
              <Stack.Screen name='Content' component={TabNavigation} />
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
