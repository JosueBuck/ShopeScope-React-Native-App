import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomMediumText from '../customTexts/CustomMediumText';
import SimplifiedRecipe from './SimplifiedRecipe';
import { ISimplifiedUserRecipe } from '../../models/recipes.model';
import BasicScreenLoadingComponent from '../BasicScreenLoadingComponent';
import recipeApi from '../../network/lib/recipes';
import { getUserId } from '../../state-management/AsyncStorageCalls';

type Props = {
  navigation: any
}

const LatestRecipesOverview: React.FC<Props> = ({ navigation }) => {

  const [recipes, setRecipes] = useState<ISimplifiedUserRecipe[] | null>(null);

  const renderItem = ( item: ListRenderItemInfo<ISimplifiedUserRecipe> ) => {
    return <SimplifiedRecipe navigation={navigation} recipeData={item.item} customContainerStyling={styles.customContainerStyle} />
  }

  useEffect(() => {
    getUserId().then((_userId) => {
      if (_userId) {
        recipeApi.getLatestSimplifiedUserRecipes(_userId).then((recipes) => {
          if (recipes) {
            setRecipes(recipes);
          }
        })
      }
    })
  }, [])

  return (
    <View style={styles.latestRecipeContaienr}>
      <CustomMediumText fontSize={23}>Latest Recipes</CustomMediumText>
      {
        recipes != null ?
        <FlatList showsHorizontalScrollIndicator={false} style={styles.flatList} horizontal={true} data={recipes} renderItem={renderItem}/>
        : <BasicScreenLoadingComponent />
      }
      <View>
      </View>
    </View>
  )
}

export default LatestRecipesOverview

const styles = StyleSheet.create({
  latestRecipeContaienr: {
    overflow: 'visible'
  },
  flatList: {
    overflow: 'visible'
  },
  customContainerStyle: {
    marginRight: 10,
    marginVertical: 10
  }
})