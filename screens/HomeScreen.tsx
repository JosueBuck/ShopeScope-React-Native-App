import { StyleSheet } from 'react-native';
import React from 'react';
import BasicScreenWrapper from '../components/BasicScreenWrapper';
import BasisScreenTitle from '../components/BasisScreenTitle';
import { colors } from '../assets/colors/colors';
import { IconName } from '../assets/icons/iconNames';

type Props = {
    navigation: any
}

const HomeScreen: React.FC<Props> = ({navigation}) => {


  return (
    <BasicScreenWrapper>
      <BasisScreenTitle func={() => navigation.navigate('Profile')} title='Hey Josue' subTitle='Ready to plan your week?' iconName={IconName.PROFILE} iconSize={35} iconColor={colors.grey}/>
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
});