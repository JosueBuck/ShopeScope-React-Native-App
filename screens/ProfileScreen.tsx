import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
    navigation: any
}

const ProfileScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>ProfileScreen</Text>
      <Button title='Go Back' onPress={() => navigation.goBack()}/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})