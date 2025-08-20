import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "@/components/Screen";
import colors from "@/config/colors";

const MessagesPage = () => {
  return (
    <Screen style={styles.screen}>
      <Text>messages</Text>
    </Screen>
  );
};

export default MessagesPage;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
});
