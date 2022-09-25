import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const BasicScreenWrapper: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.wrapper}>
            <ScrollView>
                {children}
                <StatusBar />
            </ScrollView>
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
        flex: 1
    }
})