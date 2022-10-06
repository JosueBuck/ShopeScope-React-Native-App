import { Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomMediumText from '../customTexts/CustomMediumText';
import { colors } from '../../assets/globalStyling/colors';
import { basicShadow } from '../../assets/globalStyling/shadows';

type Props = {
    timeName: string,
    selectedTimes: string,
    onPress: any,
}

const DayTimeComponent: React.FC<Props> = ({timeName, selectedTimes, onPress}) => {

    const [isSelected, setIsSelected] = useState<boolean>(false);

    useEffect(() => {
        if (selectedTimes == timeName) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [selectedTimes])

    return (
        <Pressable onPress={() => onPress(timeName)} style={[styles.dayTimeContainer, basicShadow, isSelected ? styles.selectedContainer : {}]}>
            <CustomMediumText customColor={isSelected ? colors.white : undefined} customStyling={styles.dayName}>{timeName}</CustomMediumText>
        </Pressable>
    )
}

export default DayTimeComponent

const styles = StyleSheet.create({
    dayTimeContainer: {
        width: 100,
        height: 100,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    selectedContainer: {
        backgroundColor: colors.grey
    },
    dayName: {
        textTransform: 'capitalize',
        backgroundColor: ''
    }
})