import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../assets/globalStyling/colors';
import PressableIcon from '../icons/PressableIcon';
import { IDay } from '../../models/week.model';

type Props = {
    onPressClose: any,
    selectedDay: IDay | null
}

const CloseWeekOverviewButton: React.FC<Props> = ({onPressClose, selectedDay}) => {
  return (
    <View style={styles.buttonContainer}>
        {
            selectedDay ? 
            <PressableIcon iconColor={colors.grey} iconName='ios-chevron-up-circle-outline' iconSize={25} func={onPressClose} />
            : <></>
        }
    </View>
  )
}

export default CloseWeekOverviewButton

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        alignItems: 'center'
    }
})