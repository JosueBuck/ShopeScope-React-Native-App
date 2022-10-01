import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IDay } from '../../models/week.model'
import CustomMediumText from '../customTexts/CustomMediumText'
import { colors } from '../../assets/globalStyling/colors'
import { basicShadow } from '../../assets/globalStyling/shadows'
import IonIconIcon from '../icons/IonIconIcon'

type Props = {
    dayData: IDay | null,
    onPress: any,
    selectedDay: IDay | null,
    iconName?: string,
    iconColor?: string
}

const DayComponent: React.FC<Props> = ({ dayData, onPress, selectedDay, iconName, iconColor }) => {

    const [isSelected,setIsSelected] = useState<boolean>(false);

    useEffect(() => {
        if (selectedDay?.name == dayData?.name && selectedDay != null) {
            setIsSelected(true)
        } else {
            setIsSelected(false);
        }
    }, [selectedDay])

    return (
        <>
            {
                dayData != null ? 
                <Pressable style={[styles.container, basicShadow, isSelected ? styles.selectedDay : {}]} onPress={() => onPress(dayData)}>
                    <CustomMediumText customColor={isSelected ? colors.white : undefined} fontSize={20} customStyling={styles.dayName}>{dayData.shortName}</CustomMediumText>
                </Pressable>
                :
                <Pressable style={[styles.container, basicShadow]} onPress={() => onPress()}>
                    <IonIconIcon name={iconName} color={iconColor!} size={35} />
                </Pressable>
            }
        </>

    )
}

export default DayComponent

const styles = StyleSheet.create({
    container: {
        width: 75,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
        marginHorizontal: 5,
        backgroundColor: colors.white,
        borderRadius: 15,
    }, 
    selectedDay: {
        backgroundColor: colors.grey,
    },
    selectedText: {
        color: colors.white
    },
    dayName: {
        textTransform: 'capitalize',
        backgroundColor: ''
    }
})