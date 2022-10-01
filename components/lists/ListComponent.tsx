import { ImageBackground, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { IList } from '../../models/lists.model';
import { basicShadow } from '../../assets/globalStyling/shadows';
import { colors } from '../../assets/globalStyling/colors';
import CustomMediumText from '../customTexts/CustomMediumText';

type Props = {
    navigation: any,
    listData: IList,
    strechable: boolean,
    customContainerStyling?: ViewStyle | ViewStyle[]
}

const ListComponent: React.FC<Props> = ({ navigation, listData, strechable, customContainerStyling }) => {
    return (
        <Pressable onPress={() => navigation.navigate('Content', {screen: 'ListsOverview'})} style={[styles.listContainer, basicShadow, strechable ? styles.strechable : styles.fix, customContainerStyling]}>
            <ImageBackground imageStyle={styles.image} style={styles.imageContainer} source={{ uri: listData.listPictureUrl }} />
            <View style={styles.listInfoContainer}>
                <CustomMediumText>{listData.name}</CustomMediumText>
                <View style={[styles.itemCounterContainer, basicShadow]}>
                    <CustomMediumText>{listData.itemCounter}</CustomMediumText>
                </View>
            </View>

        </Pressable>
    )
}

export default ListComponent

const styles = StyleSheet.create({
    listContainer: {
        height: 180,
        backgroundColor: colors.white,
        borderRadius: 15
    },
    strechable: {
        width: '100%'
    },
    fix: {

    },
    imageContainer: {
        width: '100%',
        height: 140
    },
    image: {
        borderRadius: 15
    },
    listInfoContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    itemCounterContainer: {
        width: 25,
        height: 25,
        borderRadius: 12.5, 
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    }
})