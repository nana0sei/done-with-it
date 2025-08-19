import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewListingButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="plus-circle"
            color={colors.white}
            size={40}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 25,
    height: 80,
    justifyContent: "center",
    width: 80,
  },

  buttonWrapper: { flex: 1, alignItems: "center", justifyContent: "center" },
});
