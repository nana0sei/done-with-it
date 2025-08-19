import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "@/components/Screen";
import colors from "@/config/colors";
import { Link } from "expo-router";

const AccountPage = () => {
  return (
    <Screen style={styles.screen}>
      <Text>account</Text>
      <Link href={"/(tabs)/account/messages"}>Messages</Link>
    </Screen>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
});
