import { StyleSheet, Text } from 'react-native';
import React from 'react';

type Props = {
    children: React.ReactNode,
    fontSize?: number
}

const CustomMediumText: React.FC<Props> = ({children, fontSize}) => {
  return (
      <Text style={[{fontSize: fontSize} ,styles.text]}>{children}</Text>
  )
}

export default CustomMediumText;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'American-Typewriter-Medium',
    }
})