import { colors } from "./colors"

interface IShadow {
    shadowColor: string, 
    shadowOffset: {
        width: number,
        height: number
    },
    shadowOpacity: number,
    shadowRadius: number,
    elevation: number
}

export const basicShadow: IShadow = {
    shadowColor: colors.grey,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
}