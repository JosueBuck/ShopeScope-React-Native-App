import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../assets/globalStyling/colors';

type Props = {
    children: JSX.Element | JSX.Element[],
    scrollable: boolean
}

const BasicScreenWrapper: React.FC<Props> = ({children, scrollable}) => {
  return (
    <SafeAreaView style={{flex: 1, overflow: 'visible', backgroundColor: colors.darkerWhite}}>
        <View style={styles.wrapper}>
            {
                scrollable ? 
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {children}
                <StatusBar />
            </ScrollView>
            :
            <>{children}</>
            }
            
        </View>
    </SafeAreaView>
    
  )
}

export default BasicScreenWrapper

const styles = StyleSheet.create({
    wrapper: {
        width: '90%',
        alignSelf: 'center',
        paddingTop: 20,
        flex: 1,
        overflow: 'visible'
    },
    scrollView: {
        overflow: 'visible'
    }
})