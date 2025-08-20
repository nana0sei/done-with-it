import React from "react";
import { StyleSheet, Text } from "react-native";
import Screen from "@/components/Screen";
import colors from "@/config/colors";

const HomePage = () => {
  return (
    <Screen style={styles.screen}>
      <Text>Hello I am index</Text>
    </Screen>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light,
  },
});
