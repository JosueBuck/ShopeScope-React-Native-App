import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import listApi from '../network/lib/list';
import { getUserId } from '../state-management/AsyncStorageCalls';
import { IList, ISimplifiedList } from '../models/lists.model';
import ListsOverviewComponent from '../components/lists/ListsOverviewComponent';
import BasicScreenWrapper from '../components/basics/BasicScreenWrapper';
import BasisScreenTitle from '../components/basics/BasisScreenTitle';
import BasicSearchComponent from '../components/basics/BasicSearchComponent';
import BasicOverlayButton from '../components/basics/BasicOverlayButton';
import { colors } from '../assets/globalStyling/colors';
import { IconName } from '../assets/icons/iconNames';

type Props = {
  navigation: any
}

const ListsOverviewScreen: React.FC<Props> = ({navigation}) => {

  const [userId, setUserId] = useState<string | null>(null);
  const [lists, setLists] = useState<ISimplifiedList[] | IList[] | null>(null);
  const [textInput, setTextInput] = useState<string>('');

  const loadUserLists = (_userId: string) => {
    listApi.getSimplifiedUserLists(_userId).then((lists) => {
      if (lists) {
        setLists(lists);
      }
    });
  }

  const resetTextInput = () => {
    setTextInput('');
    if(userId) {
      loadUserLists(userId);
    }
  }

  const loadFilteredLists = () => {
    if (userId) {
      listApi.getUserListsWithFilter(userId, textInput).then((lists) => {
        if(lists) {
          setLists(lists);
        }
      });
    }
    
  }

  const onPressAddList = () => {
    console.log('add list');
  }

  useEffect(() => {
    getUserId().then((userId) =>{
      if(userId) {
        setUserId(userId);
        loadUserLists(userId);
      }
    })
  }, [])

  return (
    <BasicScreenWrapper scrollable={false}>
      <BasisScreenTitle title='Your Lists' subTitle='Select on of your lists' />
      <BasicSearchComponent inputValue={textInput} onTextChange={setTextInput} onPressDelete={resetTextInput} onPressSearch={loadFilteredLists} />
      <ListsOverviewComponent navigation={navigation} lists={lists} />
      <BasicOverlayButton onPress={onPressAddList} iconColor={colors.white} iconName={IconName.ADD} />
    </BasicScreenWrapper>
  )
}

export default ListsOverviewScreen;

const styles = StyleSheet.create({})