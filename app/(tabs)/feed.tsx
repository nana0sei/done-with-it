import AppText from "@/components/AppText";
import Screen from "@/components/Screen";
import colors from "@/config/colors";
import React from "react";
import { StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <Screen style={styles.screen}>
      <AppText>i am home</AppText>
    </Screen>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
});
