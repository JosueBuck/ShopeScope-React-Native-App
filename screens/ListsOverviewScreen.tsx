import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import BasicScreenWrapper from '../components/BasicScreenWrapper';
import BasisScreenTitle from '../components/BasisScreenTitle';
import BasicSearchComponent from '../components/BasicSearchComponent';
import listApi from '../network/lib/list';
import { getUserId } from '../state-management/AsyncStorageCalls';
import { ISimplifiedList } from '../models/lists.model';
import ListsOverviewComponent from '../components/lists/ListsOverviewComponent';

type Props = {
  navigation: any
}

const ListsOverviewScreen: React.FC<Props> = ({navigation}) => {

  const [userId, setUserId] = useState<string | null>(null);
  const [lists, setLists] = useState<ISimplifiedList[] | null>(null);
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
  }

  const loadFilteredLists = () => {
    console.log('loading...');
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
    </BasicScreenWrapper>
  )
}

export default ListsOverviewScreen;

const styles = StyleSheet.create({})