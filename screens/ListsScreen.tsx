import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListsScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>ListsScreen</Text>
    </View>
  )
}

export default ListsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})