import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserId = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
            console.log(value);
            return value;
        } else {
            return null;
        }
    } catch (e) {
        // error reading value
        console.log(e);
    }
}