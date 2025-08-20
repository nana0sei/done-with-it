import Screen from "@/components/Screen";
import colors from "@/config/colors";
import React from "react";
import { StyleSheet, Text } from "react-native";

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
