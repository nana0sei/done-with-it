import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInMinutes } from "date-fns";

const prefix = "cache-";
const expiryInMinutes = 5;

interface StoredItem {
  value: string;
  timestamp: number;
}

const store = async (key: string, value: any) => {
  try {
    const item = { value, timestamp: Date.now() };

    await AsyncStorage.setItem(`${prefix}${key}`, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item: StoredItem) =>
  differenceInMinutes(new Date(), new Date(item.timestamp)) > expiryInMinutes;

const get = async (key: string) => {
  try {
    const value = (await AsyncStorage.getItem(`${prefix}${key}`)) || null;

    if (!value) return null;

    const item: StoredItem = JSON.parse(value);

    if (isExpired(item)) {
      await AsyncStorage.removeItem(`${prefix}${key}`);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default { store, get };
