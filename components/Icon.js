import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 35,
  backgroundColor = "#000",
  iconColor = "#fff",
}) => {
  return (
    <View
      style={[
        styles.icon,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
      ]}
    >
      <Text>
        <MaterialCommunityIcons
          name={name}
          size={size * 0.5}
          color={iconColor}
        />
      </Text>
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
