import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomMediumText from '../customTexts/CustomMediumText';
import { IDay } from '../../models/week.model';
import DayTimeComponent from './DayTimeComponent';

type Props = {
    selectedDay: IDay | null,
    selectedDayTime: string,
    setDayTime: any,
}

export const dayTimes: string[] = [
    'breakfast',
    'lunch',
    'dinner'
];

const DayTimeOverview: React.FC<Props> = ({ selectedDay, selectedDayTime, setDayTime }) => {

    return (
        <View>
            {
                selectedDay ?
                    <View style={styles.overviewWrapper}>
                        <CustomMediumText fontSize={20} customStyling={styles.textHeading}>{selectedDay?.name}</CustomMediumText>
                        <View style={styles.dayTimeFlexContainer}>
                            {
                                dayTimes.map((type) => {
                                    return <DayTimeComponent key={type} timeName={type} selectedTimes={selectedDayTime} onPress={setDayTime}/>
                                })
                            }
                        </View>                        
                    </View>
                : <></>
            }
        </View>
    )
}

export default DayTimeOverview

const styles = StyleSheet.create({
    overviewWrapper: {
        width: '100%',
        alignItems: 'center'
    },
    dayTimeFlexContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15
    },
    textHeading: {
        textTransform: 'capitalize',
        backgroundColor: ''
    }

})