import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

const key = "authToken";

const storeToken = (authToken: string) => {
  try {
    SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.error("Error storing token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error("Error getting token", error);
  }
};

const getUser = async () => {
  try {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
  } catch (error) {
    console.error("Error getting user", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Error removing token", error);
  }
};

export default { getToken, removeToken, storeToken, getUser };
