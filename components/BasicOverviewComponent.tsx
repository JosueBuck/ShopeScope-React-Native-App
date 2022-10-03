import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const BasicOverviewComponent: React.FC<Props> = ({ children }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.recipeContainer}>
                {children}
            </View>
        </ScrollView>
    )
}

export default BasicOverviewComponent

const styles = StyleSheet.create({
    recipeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
})