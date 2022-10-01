import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IDayRecipe } from '../../models/recipes.model';
import PressableIcon from '../icons/PressableIcon';
import { IconName } from '../../assets/icons/iconNames';
import { colors } from '../../assets/globalStyling/colors';
import { basicShadow } from '../../assets/globalStyling/shadows';
import CustomBoldText from '../customTexts/CustomBoldText';
import CustomMediumText from '../customTexts/CustomMediumText';
import CustomLightText from '../customTexts/CustomLightText';

type Props = {
    dayRecipe: IDayRecipe | null,
    onClose: any,
}

const DayRecipePopUp: React.FC<Props> = ({ dayRecipe, onClose }) => {

    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        if (dayRecipe != null) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [dayRecipe]);

    return (
        <Modal visible={showModal} animationType='slide' transparent={true}>
            <View style={styles.modalContainer}>
                <View style={[styles.contentContainer, basicShadow]}>
                    <ScrollView horizontal={false} style={styles.scrollView}>
                        <View style={styles.titleTextSection}>
                            <CustomBoldText fontSize={18}>{dayRecipe?.recipeName}</CustomBoldText>
                            <CustomMediumText fontSize={15}>{dayRecipe?.garnish}</CustomMediumText>
                        </View>


                        <View>
                            <CustomBoldText fontSize={15}>Selected Ingredients</CustomBoldText>
                            <View style={styles.descriptionContainer}>
                                <CustomLightText fontSize={12}>Name</CustomLightText>
                                <CustomLightText fontSize={12}>Amount</CustomLightText>
                            </View>
                            {
                                dayRecipe?.ingredients.map((ingredient) => {
                                    return (
                                        <View style={styles.ingredientSection} key={ingredient._id}>
                                            <CustomMediumText>{ingredient.name}</CustomMediumText>
                                            <CustomMediumText>{ingredient.amount} {ingredient.unit}</CustomMediumText>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                    <View style={styles.iconContainer}>
                        <PressableIcon iconName={IconName.CLOSE} func={() => onClose(null)} iconSize={25} iconColor={colors.grey} />
                    </View>
                </View>
            </View>

        </Modal>
    )
}

export default DayRecipePopUp

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        width: '80%',
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 25
    },
    scrollView: {
        maxHeight: 200
    },
    titleTextSection: {
        width: '80%',
        marginBottom: 20
    },
    descriptionContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    ingredientSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    iconContainer: {
        position: 'absolute',
        right: 20,
        top: 20,
        borderRadius: 50,
        backgroundColor: colors.white
    }

})

