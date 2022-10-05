import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import CustomMediumText from '../customTexts/CustomMediumText'
import { colors } from '../../assets/globalStyling/colors'

const BasicScreenLoadingComponent: React.FC = () => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator color={colors.grey} size={'small'}/>
            <CustomMediumText>loading</CustomMediumText>
        </View>
    )
}

export default BasicScreenLoadingComponent

const styles = StyleSheet.create({
    loadingContainer: {
        width: '100%',
        marginVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
})