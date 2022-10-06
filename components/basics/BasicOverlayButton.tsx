import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import IonIconIcon from '../icons/IonIconIcon';
import { colors } from '../../assets/globalStyling/colors';

type Props = {
    onPress: any,
    iconName: string,
    iconColor: string
}

const BasicOverlayButton: React.FC<Props> = ({ onPress, iconName, iconColor }) => {
    return (
            <Pressable style={styles.button} onPress={onPress}>
                <IonIconIcon name={iconName} color={iconColor} size={30} />
            </Pressable>
    )
}

export default BasicOverlayButton

const styles = StyleSheet.create({
    button: {
        opacity: .8,
        width: 65,
        height: 65,
        borderRadius: 35,
        position: 'absolute',
        alignSelf: 'center',
        padding: 5,
        bottom: 0,
        backgroundColor: colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        paddingRight: 3
    }
})