import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DimensionValue,
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
} from "react-native";
import defaultStyles from "../config/styles";
import { MaterialCommunityIconName } from "@/types";

export interface AppTextInputProps extends TextInputProps {
  icon?: MaterialCommunityIconName;
  width?: DimensionValue;
}

const AppTextInput = ({
  icon,
  width = "100%",
  ...otherProps
}: AppTextInputProps) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    gap: 2,
  },

  textInput: defaultStyles.text,
});
