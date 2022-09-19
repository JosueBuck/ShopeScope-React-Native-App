import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})