import { Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import { basicShadow } from '../../assets/globalStyling/shadows';
import { colors } from '../../assets/globalStyling/colors';
import CustomMediumText from '../customTexts/CustomMediumText';
import { IRecipeTypeData } from '../../models/recipes.model';

type Props = {
    filterData: IRecipeTypeData,
    isPreSelected: boolean,
    onPress: any
}

const TypeFilterComponent: React.FC<Props> = ({filterData, isPreSelected, onPress}) => {

  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsSelected(isPreSelected);
  }, [])

  return (
    <Pressable onPress={() => {onPress(filterData.recipeType, isSelected); setIsSelected(!isSelected)}} style={[styles.filterTypeContainer, basicShadow, isSelected ? {backgroundColor: colors.grey} : {}]}>
      <CustomMediumText customStyling={[styles.text, isSelected ? styles.selectedText : {}]}>{filterData.name}</CustomMediumText>
    </Pressable>
  )
}

export default TypeFilterComponent

const styles = StyleSheet.create({
    filterTypeContainer: {
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    text: {
        textTransform: 'capitalize',
        backgroundColor: ''
    },
    selectedText: {
      color: colors.white,
      backgroundColor: ''
    }
})