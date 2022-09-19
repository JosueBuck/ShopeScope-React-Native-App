import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecipesScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>RecipesScreen</Text>
    </View>
  )
}

export default RecipesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})