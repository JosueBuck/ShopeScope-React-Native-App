import { StyleSheet } from 'react-native';
import React from 'react';
import BasicScreenWrapper from '../components/BasicScreenWrapper';
import BasisScreenTitle from '../components/BasisScreenTitle';
import { colors } from '../assets/colors/colors';

type Props = {
    navigation: any
}

const HomeScreen: React.FC<Props> = ({navigation}) => {


  return (
    <BasicScreenWrapper>
      <BasisScreenTitle func={() => navigation.navigate('Profile')} title='Hey Josue' subTitle='Ready to plan your week?' iconName='person-circle-sharp' iconSize={35} iconColor={colors.grey}/>
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