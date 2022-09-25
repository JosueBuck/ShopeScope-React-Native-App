import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import IonIconIcon from './IonIconIcon';

type Props = {
    func: any,
    iconName: string,
    iconSize: number,
    iconColor: string
}

const PressableIcon: React.FC<Props> = ({func, iconName, iconSize, iconColor}) => {
    return (
    <Pressable onPress={func}>
        <IonIconIcon name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  )
}

export default PressableIcon

const styles = StyleSheet.create({})