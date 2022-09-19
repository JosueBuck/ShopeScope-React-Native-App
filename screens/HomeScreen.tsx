import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
    navigation: any
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>HomeScreen</Text>
      <Button title='Profile' onPress={() => navigation.navigate('Profile')} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})