import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { colors } from '../../assets/globalStyling/colors';

type Props = {
    children: React.ReactNode,
    fontSize?: number
}

const CustomLightText: React.FC<Props> = ({children, fontSize}) => {
  return (
    <Text style={[{fontSize: fontSize}, styles.text]}>{children}</Text>
  )
}

export default CustomLightText;

const styles = StyleSheet.create({
    text: {
        color: colors.grey,
        fontFamily: 'American-Typewriter-Light',
    }
})