import { StyleSheet } from 'react-native';
import React from 'react';
import { ISimplifiedList } from '../../models/lists.model';
import BasicOverviewComponent from '../BasicOverviewComponent';
import BasicScreenLoadingComponent from '../BasicScreenLoadingComponent';
import SimplifiedListComponent from './SimplifiedListComponent';

type Props = {
    navigation: any,
    lists: ISimplifiedList[] | null
}

const ListsOverviewComponent: React.FC<Props> = ({navigation, lists}) => {
  return (
    <BasicOverviewComponent>
        {
            lists ? 
            lists.map((list) => {
              return <SimplifiedListComponent navigation={navigation} listData={list} strechable={false} customContainerStyling={{marginBottom: 10}} key={list._id} />
            })
            : 
            <BasicScreenLoadingComponent />
        }
    </BasicOverviewComponent>
  )
}

export default ListsOverviewComponent;

const styles = StyleSheet.create({})