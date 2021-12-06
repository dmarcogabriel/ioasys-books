import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async <T>(key: string, data: T): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getData = async <T>(key: string): Promise<T | string | null> => {
  const data = await AsyncStorage.getItem(key);

  if (data) {
    try {
      const parsedData: T = JSON.parse(data);
      return parsedData;
    } catch (error) {
      return data;
    }
  }
  return null;
};

export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
