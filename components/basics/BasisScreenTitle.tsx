import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomMediumText from '../customTexts/CustomMediumText';
import PressableIcon from '../icons/PressableIcon';


type Props = {
    title: string, 
    subTitle: string,
    iconName?: string,
    iconSize?: number,
    iconColor?: string,
    func?: any
}

const BasisScreenTitle: React.FC<Props> = ({func, title, subTitle, iconName, iconSize, iconColor}) => {
  return (
    <View style={styles.titleContainer}>
        <View style={styles.titleFlexView}>
            <CustomMediumText fontSize={35}>{title}</CustomMediumText>
            {
                iconName && iconSize && iconColor && func ?
                
                <PressableIcon func={func} iconName={iconName} iconSize={iconSize} iconColor={iconColor} />
                :
                <></>
            }
            
        </View>
      <CustomMediumText fontSize={18}>{subTitle}</CustomMediumText>
    </View>
  )
}

export default BasisScreenTitle

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
    },
    titleFlexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10
    }
});