import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import IonIconIcon from './IonIconIcon';

type Props = {
    func: any,
    iconName: string,
    iconSize: number,
    iconColor: string,
    customStyling?: ViewStyle | ViewStyle[]
}

const PressableIcon: React.FC<Props> = ({func, iconName, iconSize, iconColor, customStyling}) => {
    return (
    <Pressable style={customStyling} onPress={func}>
        <IonIconIcon name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  )
}

export default PressableIcon

const styles = StyleSheet.create({})