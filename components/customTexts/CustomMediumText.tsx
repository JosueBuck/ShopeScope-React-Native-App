import { StyleSheet, Text, ViewStyle } from 'react-native';
import React from 'react';
import { colors } from '../../assets/globalStyling/colors';

type Props = {
    children: React.ReactNode,
    fontSize?: number,
    customColor?: string,
    customStyling?: ViewStyle | ViewStyle[]
}

const CustomMediumText: React.FC<Props> = ({children, fontSize, customColor, customStyling}) => {
  return (
      <Text style={[{fontSize: fontSize} ,styles.text, {color: customColor ? customColor : colors.grey}, customStyling]}>{children}</Text>
  )
}

export default CustomMediumText;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'American-Typewriter-Medium',
    }
})