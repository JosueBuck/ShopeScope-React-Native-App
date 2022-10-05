import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IDay, IDayRecipeData, IWeek } from '../../models/week.model';
import { getUserId } from '../../state-management/AsyncStorageCalls';
import weekApi from '../../network/lib/week';
import listApi from '../../network/lib/list';
import DayComponent from './DayComponent';
import DayTimeOverview from './DayTimeOverview';
import { IDayRecipe } from '../../models/recipes.model';
import DayRecipeOverview from './DayRecipeOverview';
import CloseWeekOverviewButton from './CloseWeekOverviewButton';
import DayRecipePopUp from './DayRecipePopUp';
import { colors } from '../../assets/globalStyling/colors';
import { IconName } from '../../assets/icons/iconNames';
import BasicScreenLoadingComponent from '../BasicScreenLoadingComponent';

type Props = {
    navigation: any
}

const WeekOverview: React.FC<Props> = ({ navigation }) => {

    const [weekData, setWeekData] = useState<IWeek | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [selectedDay, setSelectedDay] = useState<IDay | null>(null);
    const [selectedDayTime, setSelectedDayTime] = useState<string>('');
    const [dayTimeRecipes, setDayTimeRecipes] = useState<IDayRecipe[] | null>(null);
    const [selectedDayRecipe, setSelectedDayRecipe] = useState<IDayRecipe | null>(null);
    const userWeekListId: string = '633ce13474f5ca5504bc508d';


    const closeWeekOverview = () => {
        setSelectedDay(null);
        setSelectedDayTime('');
        setDayTimeRecipes(null);
    }

    const pressOnDay = (_day: IDay) => {
        setSelectedDay(_day);
        setSelectedDayTime('');
        setDayTimeRecipes(null);
    }

    const pressOnDayTime = (_dayTime: string) => {
        setSelectedDayTime(_dayTime);
        handleDayTimeRecipes(_dayTime)
    }

    const handleDayTimeRecipes = (_dayTime: string) => {
        const dayTypeRecipes: IDayRecipe[] | null = extractDayTimeRecipes(_dayTime);
        setDayTimeRecipes(dayTypeRecipes);
    }

    const extractDayTimeRecipes = (_dayTime: string) => {
        if (selectedDay) {
            switch (_dayTime) {
                case 'breakfast':
                    return selectedDay?.breakfast;
                case 'lunch':
                    return selectedDay?.lunch;
                case 'dinner':
                    return selectedDay?.dinner;
                default:
                    return null;
            }
        }
        return null;
    }

    const loadUserWeek = (_userId: string) => {
        weekApi.getUserWeek(_userId).then((week) => {
            setWeekData(week);
        })
    }

    const addWeekRecipesToList = () => {
        if (weekData && userId) {
            let weekRecipes: IDayRecipe[] = [];
            weekData.week.forEach((day: IDay) => {
                const dayRecipes: IDayRecipe[] = day.breakfast.concat(day.dinner, day.lunch);
                weekRecipes = weekRecipes.concat(dayRecipes);
            })
            listApi.addWeekRecipesToList(userId, weekData.selectedWeekList, weekRecipes);
        }
        
    }

    const removeAllWeekRecipes = () => {
        if (userId) {
            weekApi.removeAllRecipesFromWeek(userId).then(() => { loadUserWeek(userId); closeWeekOverview() });
        }
    }

    const removeDayRecipe = (_recipe: IDayRecipe) => {
        if (userId && selectedDay) {
            const dayData: IDayRecipeData = {
                dayId: selectedDay._id,
                recipe: _recipe,
                type: selectedDayTime  
            }
            weekApi.removeRecipeFromDay(userId, dayData).then(() => loadUserWeek(userId));
        }
    }

    const renderDayItem = (_itemData: IDay, _onPress: any, _selectedDay: IDay | null) => {
        return <DayComponent key={_itemData._id} dayData={_itemData} onPress={_onPress} selectedDay={_selectedDay} />
    }

    useEffect(() => {
        getUserId().then((userId) => {
            if (userId != null) {
                setUserId(userId);
                loadUserWeek(userId);
            }
        });
    }, []);

    useEffect(() => {
        if (selectedDay != null) {
            weekData?.week.map((day: IDay) => {
                if (day.name == selectedDay.name) {
                    setSelectedDay(day);
                    if (selectedDayTime) {
                        handleDayTimeRecipes(selectedDayTime);
                    }
                }
            })
        }
    }, [weekData]);

    return (
        <View style={styles.weekContainer}>
            {
                userId && weekData ?
                    <>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                weekData?.week.map((_day: IDay) => {
                                    return renderDayItem(_day, pressOnDay, selectedDay);
                                })
                            }
                            <DayComponent onPress={addWeekRecipesToList} dayData={null} selectedDay={null} iconColor={colors.green} iconName={IconName.SEND} />
                            <DayComponent onPress={removeAllWeekRecipes} dayData={null} selectedDay={null} iconColor={colors.red} iconName={IconName.TRASH} />
                        </ScrollView>
                        <DayTimeOverview selectedDay={selectedDay} selectedDayTime={selectedDayTime} setDayTime={pressOnDayTime} />
                        <DayRecipeOverview navigation={navigation} dayRecipes={dayTimeRecipes} onChange={removeDayRecipe} onSelectDayRecipe={setSelectedDayRecipe} />
                        <CloseWeekOverviewButton selectedDay={selectedDay} onPressClose={closeWeekOverview} />
                        <DayRecipePopUp dayRecipe={selectedDayRecipe} onClose={setSelectedDayRecipe} />
                    </>
                    :
                    <BasicScreenLoadingComponent />
            }
        </View>

    )
}

export default WeekOverview

const styles = StyleSheet.create({
    weekContainer: {
        position: 'relative',
        width: '100%',
        overflow: 'visible'
    },
    flatList: {
        overflow: 'visible'
    }

});