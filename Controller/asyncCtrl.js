import AsyncStorage from "@react-native-community/async-storage";


export const setDataToAsyncStorage = async (index_name, item) => {
  try {
    await AsyncStorage.setItem(`@test_app_${index_name}`, item);
  } catch (error) {
    // Error saving data
  }
};


export const getDataFromAsyncStorage = async index_name => {
  try {
    const value = (await AsyncStorage.getItem(`@test_app_${index_name}`)) || "none";
    if (value !== null) {
      // We have data!!
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
  return "none";
};


export const clearAsyncStorage = async item => {
  try {
    await AsyncStorage.removeItem(item);
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};
