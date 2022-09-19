import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>RegisterScreen</Text>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})