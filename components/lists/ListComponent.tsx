import { ImageBackground, Pressable, ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { IList, ISimplifiedList } from '../../models/lists.model';
import { basicShadow } from '../../assets/globalStyling/shadows';
import { colors } from '../../assets/globalStyling/colors';
import CustomMediumText from '../customTexts/CustomMediumText';

type Props = {
    navigation: any,
    listData: IList | ISimplifiedList,
    strechable: boolean,
    customContainerStyling?: ViewStyle | ViewStyle[]
}

const ListComponent: React.FC<Props> = ({ navigation, listData, strechable, customContainerStyling }) => {
    return (
        <View style={[styles.listContainer, basicShadow, strechable ? styles.strechable : styles.fix, customContainerStyling]}>
            <ImageBackground imageStyle={styles.image} style={strechable ? styles.strechableImageContainer : styles.fixImageContainer} source={{ uri: listData.listPictureUrl }} />
            <View style={styles.listInfoContainer}>
                <ScrollView horizontal={true} style={styles.listNameContainer} showsHorizontalScrollIndicator={false}>
                    <Pressable onPress={() => navigation.navigate('Content', { screen: 'ListsOverview' })} >
                        <CustomMediumText>{listData.name}</CustomMediumText>
                    </Pressable>
                </ScrollView>
                <View style={[styles.itemCounterContainer, basicShadow]}>
                    <CustomMediumText>{listData.itemCounter}</CustomMediumText>
                </View>
            </View>
        </View>
    )
}

export default ListComponent

const styles = StyleSheet.create({
    listContainer: {
        height: 180,
        backgroundColor: colors.white,
        borderRadius: 15,
        overflow: 'visible'
    },
    strechable: {
        width: '100%'
    },
    fix: {
        height: 200,
        width: 160
    },
    strechableImageContainer: {
        width: '100%',
        height: 140
    },
    fixImageContainer: {
        height: 160,
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
    listNameContainer: {
        marginRight: 10
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