import { ImageBackground, Pressable, ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { ISimplifiedUserRecipe } from '../../models/recipes.model';
import { colors } from '../../assets/globalStyling/colors';
import { basicShadow } from '../../assets/globalStyling/shadows';
import CustomBoldText from '../customTexts/CustomBoldText';
import CustomMediumText from '../customTexts/CustomMediumText';
import IonIconIcon from '../icons/IonIconIcon';
import { IconName } from '../../assets/icons/iconNames';

type Props = {
    navigation: any,
    recipeData: ISimplifiedUserRecipe,
    customContainerStyling?: ViewStyle | ViewStyle[]
}

const SimplifiedRecipe: React.FC<Props> = ({ navigation, recipeData, customContainerStyling }) => {



    return (
        <View style={[styles.recipeContainer, basicShadow, customContainerStyling]}>
            <ImageBackground imageStyle={styles.image} style={styles.imageContainer} source={{ uri: recipeData.recipePictureUrl }} />
            <View style={styles.infoContainer}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <Pressable onPress={() => navigation.navigate('Content', {screen: 'RecipesOverview'})}>
                        <CustomBoldText>{recipeData.name}</CustomBoldText>
                        <CustomMediumText fontSize={12}>{recipeData.garnish}</CustomMediumText>
                    </Pressable>
                </ScrollView>
                <View style={styles.iconContainer}>
                    <View style={styles.timeContainer}>
                        <IonIconIcon size={20} name={IconName.CLOCK} color={colors.grey} />
                        <IonIconIcon size={20} name={IconName.CLOCK} color={recipeData.cookingTime >= 30 ? colors.grey : colors.lighterGrey} />
                        <IonIconIcon size={20} name={IconName.CLOCK} color={recipeData.cookingTime >= 60 ? colors.grey : colors.lighterGrey} />
                    </View>
                    <IonIconIcon size={20} name={IconName.FOOD} color={colors.grey} />
                </View>
            </View>
        </View>
    )
}

export default SimplifiedRecipe

const styles = StyleSheet.create({
    recipeContainer: {
        width: 160,
        height: 225,
        backgroundColor: colors.white,
        borderRadius: 15,
    },
    imageContainer: {
        width: '100%',
        height: 112.5,
    },
    image: {
        borderRadius: 15
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    scrollView: {
        maxHeight: 65
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    timeContainer: {
        flexDirection: 'row',
    }
})