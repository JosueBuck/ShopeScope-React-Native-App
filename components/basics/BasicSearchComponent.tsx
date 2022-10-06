import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { basicShadow } from '../../assets/globalStyling/shadows';
import PressableIcon from '../icons/PressableIcon';
import { IconName } from '../../assets/icons/iconNames';
import { colors } from '../../assets/globalStyling/colors';


type Props = {
    inputValue: string, 
    onTextChange: any,
    onPressSearch: any,
    onPressDelete: any,
    iconName?: string,
    iconFunc?: any
}

const BasicSearchComponent: React.FC<Props> = ({inputValue, onTextChange, onPressSearch, onPressDelete, iconName, iconFunc}) => {
  return (
    <View style={styles.componentContainer}>
      <View style={[styles.searchContainer, basicShadow, iconName ? {width: '85%'} : {width: '100%'}]}>
        <TextInput onSubmitEditing={() => onPressSearch(inputValue)} value={inputValue} onChangeText={(e) => onTextChange(e)} style={styles.textInput}/>
        <PressableIcon iconName={IconName.SEARCH} iconColor={colors.grey} iconSize={20} func={() => onPressSearch(inputValue)} />
        <PressableIcon iconName={IconName.BACKSPACE} iconColor={colors.grey} iconSize={20} func={onPressDelete} />
      </View>
      {
        iconName && iconFunc ?
        <View style={[styles.filterContainer, basicShadow]}>
            <PressableIcon func={() => iconFunc(true)} iconColor={colors.grey} iconName={iconName} iconSize={20} />
        </View>
        
        : 
        <></>
      }
    </View>
  )
}

export default BasicSearchComponent

const styles = StyleSheet.create({
    componentContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingRight: 10,
        borderRadius: 15
    },
    textInput: {
        height: 30,
        width: '80%'
    },
    filterContainer: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    }
})