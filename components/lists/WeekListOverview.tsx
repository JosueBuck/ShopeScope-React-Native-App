import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomMediumText from '../customTexts/CustomMediumText';
import listApi from '../../network/lib/list'
import { IList } from '../../models/lists.model';
import BasicScreenLoadingComponent from '../BasicScreenLoadingComponent';
import ListComponent from './ListComponent';

type Props = {
    navigation: any
}

const WeekListOverview: React.FC<Props> = ({navigation}) => {

    const [list, setList] = useState<IList | null>(null);
    const userWeekListId: string = '633ce13474f5ca5504bc508d';

    useEffect(() => {
        listApi.getList(userWeekListId).then((list) => {
            if (list) {
                setList(list);
            }
        })
    }, []);

    return (
        <View style={styles.weekOverviewListContainer}>
            <CustomMediumText fontSize={23}>Week List</CustomMediumText>
            {
                list ? 
                <ListComponent navigation={navigation} listData={list} strechable={true} customContainerStyling={styles.listComponentStyling} />
                : <BasicScreenLoadingComponent />
            }
        </View>
    )
}

export default WeekListOverview

const styles = StyleSheet.create({
    weekOverviewListContainer: {
        overflow: 'visible',
        marginTop: 20
    },
    listComponentStyling: {
        marginVertical: 10
    }

})