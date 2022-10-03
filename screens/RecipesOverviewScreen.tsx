import React, { useEffect, useState } from 'react';
import BasicScreenWrapper from '../components/BasicScreenWrapper';
import BasisScreenTitle from '../components/BasisScreenTitle';
import { ISimplifiedUserRecipe, RecipeType } from '../models/recipes.model';
import { getUserId } from '../state-management/AsyncStorageCalls';
import recipeApi from '../network/lib/recipes';
import BasicSearchComponent from '../components/BasicSearchComponent';
import { IconName } from '../assets/icons/iconNames';
import RecipeFilterPopUp from '../components/recipes/RecipeFilterPopUp';
import RecipesOverviewComponent from '../components/recipes/RecipesOverviewComponent';

type Props = {
  navigation: any
}

const RecipesOverviewScreen: React.FC<Props> = ({ navigation }) => {

  const [recipes, setRecipes] = useState<ISimplifiedUserRecipe[] | null>(null);
  const [selectedFilterTypes, setSelectedFilterTypes] = useState<RecipeType[]>([]);
  const [textInput, setTextInput] = useState<string>('');
  const [userId, setUserId] = useState<string | null>(null);
  const [showFilterTypes, setShowFilterTypes] = useState<boolean>(false);

  const loadAllUserRecipes = (_userId: string) => {
    recipeApi.getSimplifiedUserRecipes(_userId).then((allRecipes) => {
      setRecipes(allRecipes);
    });
  }

  const loadTypeFilteredUserRecipes = (_userId: string, _searchValue: string, _filterTypes: RecipeType[]) => {
    recipeApi.getSimplifiedUserRecipesWithFilter(_userId, _searchValue, _filterTypes).then((recipes) => {
      if (recipes) {
        setRecipes(recipes);
      }
    })
  }

  const resetTextInput = () => {
    setTextInput('');
    handleFilter('', selectedFilterTypes);
  }

  const resetFilterTypes = () => {
    setSelectedFilterTypes([]);
    handleClosePopUp([]);
  }

  const onPressFilterType = (_filterType: RecipeType, remove: boolean) => {
    let updatedFilters: RecipeType[] = selectedFilterTypes;
    if (remove) {
      const index: number = updatedFilters.findIndex((type) => type == _filterType);
      if (index != -1) {
        updatedFilters.splice(index, 1);
      }
    } else {
      updatedFilters.push(_filterType);
    }
    setSelectedFilterTypes(updatedFilters);
  }

  const handleFilter = (_textInput?: string, _selectedFilterTypes?: RecipeType[],) => {
    if (!_textInput && _textInput != '') {
      _textInput = textInput;
    }
    if (!_selectedFilterTypes) {
      _selectedFilterTypes = selectedFilterTypes;
    }
    if (_selectedFilterTypes.length > 0 && userId || _textInput.length > 0 && userId) {

      loadTypeFilteredUserRecipes(userId, _textInput, _selectedFilterTypes);
    } else if (_selectedFilterTypes.length == 0 && userId) {
      loadAllUserRecipes(userId);
      console.log('load all')
    }
  }

  const handleClosePopUp = (_filterTypes?: RecipeType[]) => {
    setShowFilterTypes(false);
    handleFilter(textInput, _filterTypes);
  }

  useEffect(() => {
    getUserId().then((userId) => {
      if (userId) {
        setUserId(userId);
      }
    })
  }, []);

  useEffect(() => {
    if (userId) {
      loadAllUserRecipes(userId);
    }
  }, [userId]);

  return (
    <BasicScreenWrapper scrollable={false}>
      <BasisScreenTitle title='Your recipes' subTitle='Select on of your recipes' />
      <BasicSearchComponent inputValue={textInput} onTextChange={setTextInput} iconFunc={setShowFilterTypes} iconName={IconName.FILTER} onPressSearch={handleFilter} onPressDelete={resetTextInput} />
      <RecipesOverviewComponent navigation={navigation} recipes={recipes} />
      <RecipeFilterPopUp showModal={showFilterTypes} onClose={handleClosePopUp} onResetFilterType={resetFilterTypes} selectedFilterTypes={selectedFilterTypes} onPressFilterType={onPressFilterType} />
    </BasicScreenWrapper>
  )
}

export default RecipesOverviewScreen;
