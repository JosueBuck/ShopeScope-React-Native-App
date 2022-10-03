import { StyleSheet } from 'react-native';
import React from 'react';
import { ISimplifiedUserRecipe } from '../../models/recipes.model';
import SimplifiedRecipeComponent from './SimplifiedRecipeComponent';
import BasicScreenLoadingComponent from '../BasicScreenLoadingComponent';
import BasicOverviewComponent from '../BasicOverviewComponent';

type Props = {
  navigation: any,
  recipes: ISimplifiedUserRecipe[] | null
}

const RecipesOverviewComponent: React.FC<Props> = ({ navigation, recipes }) => {

  return (
    <BasicOverviewComponent>
      {
        recipes ?
          recipes.map((recipe) => {
            return <SimplifiedRecipeComponent navigation={navigation} recipeData={recipe} key={recipe._id} customContainerStyling={styles.recipe} />
          })
          :
          <BasicScreenLoadingComponent />
      }
    </BasicOverviewComponent>
  )
}

export default RecipesOverviewComponent

const styles = StyleSheet.create({
  recipeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  recipe: {
    marginBottom: 10
  }
})