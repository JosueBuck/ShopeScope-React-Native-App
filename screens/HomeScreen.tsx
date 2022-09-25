import { StyleSheet } from 'react-native';
import React from 'react';
import BasicScreenWrapper from '../components/BasicScreenWrapper';

type Props = {
    navigation: any
}

const HomeScreen: React.FC<Props> = ({navigation}) => {


  return (
    <BasicScreenWrapper>
      
    </BasicScreenWrapper>

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


    {/* <View style={styles.screen}>
      <CustomLightText fontSize={35}>Light Text</CustomLightText>
      <CustomMediumText fontSize={35}>Medium Text</CustomMediumText>
      <CustomLBoldText fontSize={35}>Bold Text</CustomLBoldText>
      <Text>HomeScreen</Text>
      <Button title='Profile' onPress={() => navigation.navigate('Profile')} />
    </View> */}