import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useEffect } from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }) => {
  //request permission
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        quality: 0.5,
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <MaterialCommunityIcons
              color={colors.medium}
              size={40}
              name="camera"
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },

  image: {
    height: "100%",
    width: "100%",
  },
});
