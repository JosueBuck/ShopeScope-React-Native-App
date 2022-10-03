import { Modal, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import React from 'react';
import BasisScreenTitle from '../BasisScreenTitle';
import { recipeTypes } from '../../data/recipeFilterData';
import TypeFilterComponent from './TypeFilterComponent';
import { RecipeType } from '../../models/recipes.model';
import PressableIcon from '../icons/PressableIcon';
import { IconName } from '../../assets/icons/iconNames';
import { colors } from '../../assets/globalStyling/colors';

type Props = {
    showModal: boolean,
    onClose: any,
    onResetFilterType: any,
    selectedFilterTypes: RecipeType[],
    onPressFilterType: any
}

const RecipeFilterPopUp: React.FC<Props> = ({ showModal, onClose, onResetFilterType, selectedFilterTypes, onPressFilterType }) => {

    const { height, width } = useWindowDimensions();

    return (
        <Modal visible={showModal} animationType='slide'>
            <SafeAreaView>
                <View style={styles.wrapper}>
                    <BasisScreenTitle title='Recipe Types' subTitle='Select the types you want to filter for' />
                    <ScrollView style={{ height: height * 0.75, marginTop: height * 0.02 }} contentContainerStyle={styles.scrollViewContent}>
                        <View style={styles.filterTypesContainer}>
                            {
                                recipeTypes.map((type) => {
                                    const foundFilter: RecipeType | undefined = selectedFilterTypes.find((filter) => filter == type.recipeType);
                                    return <TypeFilterComponent key={type.recipeType} filterData={type} isPreSelected={foundFilter ? true : false} onPress={onPressFilterType} />
                                })
                            }
                        </View>
                    </ScrollView>
                    <View style={styles.buttonContainer}>
                        <PressableIcon customStyling={styles.buttons} iconName={IconName.RELOAD} func={onResetFilterType} iconColor={colors.white} iconSize={30} />
                        <PressableIcon customStyling={styles.buttons} iconName={IconName.CHECK} func={() => onClose()} iconColor={colors.white} iconSize={30} />
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default RecipeFilterPopUp

const styles = StyleSheet.create({
    wrapper: {
        width: '90%',
        alignSelf: 'center',
        paddingTop: 20,
    },
    buttonContainer: {
        position: 'absolute',
        right: 0,
        bottom: 20
    },
    buttons: {
        width: 65,
        height: 65,
        borderRadius: 35,
        backgroundColor: colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    scrollViewContent: {
        paddingVertical: 10
    },
    filterTypesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
})