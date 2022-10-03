import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { IDayRecipe } from '../../models/recipes.model';
import CustomMediumText from '../customTexts/CustomMediumText';
import CustomBoldText from '../customTexts/CustomBoldText';
import PressableIcon from '../icons/PressableIcon';
import { IconName } from '../../assets/icons/iconNames';
import { colors } from '../../assets/globalStyling/colors';


type Props = {
    recipeData: IDayRecipe,
    onPressRemove: any,
    onSelectDayRecipe: any
}

const DayRecipeComponent: React.FC<Props> = ({ recipeData, onPressRemove, onSelectDayRecipe }) => {

    return (
        <View style={styles.dayRecipeContainer}>
            <ImageBackground imageStyle={styles.backgroundImage} style={styles.backgroundImageContainer} source={{ uri: recipeData.recipePictureUrl }} resizeMode='cover'>
                <View style={styles.contentWrapper}>
                    <Pressable onPress={() => onSelectDayRecipe(recipeData)} style={styles.recipeTextContainer}>
                        <CustomBoldText fontSize={20}>{recipeData.name}</CustomBoldText>
                        <CustomMediumText fontSize={18}>{recipeData.garnish}</CustomMediumText>
                    </Pressable>
                    <PressableIcon iconName={IconName.REMOVE} iconColor={colors.grey} iconSize={25} func={() => onPressRemove(recipeData)}/>
                </View>
            </ImageBackground>
        </View>
    )
}

export default DayRecipeComponent

const styles = StyleSheet.create({
    dayRecipeContainer: {
        width: '100%',
        marginVertical: 10
    },
    contentWrapper: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backgroundImageContainer: {
        width: '100%',
    },
    backgroundImage: {
        opacity: .2,
        borderRadius: 10
    },
    recipeTextContainer: {
        width: '80%',
    }
})