import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomMediumText from '../components/CustomMediumText';
import CustomLBoldText from '../components/CustomBoldText';
import CustomLightText from '../components/CustomLightText';

type Props = {
    navigation: any
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <CustomLightText fontSize={35}>Light Text</CustomLightText>
      <CustomMediumText fontSize={35}>Medium Text</CustomMediumText>
      <CustomLBoldText fontSize={35}>Bold Text</CustomLBoldText>
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