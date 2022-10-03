import React, { useEffect } from 'react';
import BasicScreenWrapper from '../components/BasicScreenWrapper';
import BasisScreenTitle from '../components/BasisScreenTitle';
import { colors } from '../assets/globalStyling/colors';
import { IconName } from '../assets/icons/iconNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WeekOverview from '../components/week/WeekOverview';
import LatestRecipesOverview from '../components/recipes/LatestRecipesOverview';
import WeekListOverview from '../components/lists/WeekListOverview';

type Props = {
  navigation: any
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {

  const userIdPlaceholder: string = '63327aa74c96ea744f2d24c6';

  const storeUserIdData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    storeUserIdData(userIdPlaceholder);
  }, [])

  return (
    <BasicScreenWrapper scrollable={true}>
      <BasisScreenTitle func={() => navigation.navigate('Profile')} title='Hey Josue' subTitle='Ready to plan your week?' iconName={IconName.PROFILE} iconSize={35} iconColor={colors.grey} />
      <WeekOverview navigation={navigation} />
      <LatestRecipesOverview navigation={navigation} />
      <WeekListOverview navigation={navigation} />
    </BasicScreenWrapper>

  )
}

export default HomeScreen;