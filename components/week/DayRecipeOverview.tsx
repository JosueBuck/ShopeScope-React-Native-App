import { StyleSheet, View } from 'react-native';
import React from 'react';
import { IDayRecipe } from '../../models/recipes.model';
import DayRecipeComponent from './DayRecipeComponent';
import CustomMediumText from '../customTexts/CustomMediumText';
import PressableIcon from '../icons/PressableIcon';
import { IconName } from '../../assets/icons/iconNames';
import { colors } from '../../assets/globalStyling/colors';
import { basicShadow } from '../../assets/globalStyling/shadows';

type Props = {
    navigation: any,
    dayRecipes: IDayRecipe[] | null,
    onChange: any,
    onSelectDayRecipe: any
}

const DayRecipeOverview: React.FC<Props> = ({navigation, dayRecipes, onChange, onSelectDayRecipe }) => {
    
    return (
        <View>
            {
                dayRecipes ?
                    <View style={styles.overviewWrapper}>
                        <CustomMediumText fontSize={20}>Recipes</CustomMediumText>
                        <View style={styles.dayRecipeContainer}>
                            <PressableIcon iconName={IconName.ADD} iconColor={colors.grey} iconSize={25} func={() => navigation.navigate('Content', {screen: 'RecipesOverview'})} customStyling={[styles.addButton, basicShadow]} />
                            {
                                dayRecipes.map((recipe) => {
                                    return <DayRecipeComponent key={recipe._id} recipeData={recipe} onPressRemove={onChange} onSelectDayRecipe={onSelectDayRecipe} />
                                })
                            }
                        </View>

                    </View>
                    : <></>
            }
        </View>
    )
}

export default DayRecipeOverview

const styles = StyleSheet.create({
    overviewWrapper: {
        width: '100%',
        alignItems: 'center'
    },
    dayRecipeContainer: {
        width: '100%',
        marginVertical: 15
    },
    addButton: {
        width: '100%',
        paddingVertical: 1,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: colors.white
    }
})