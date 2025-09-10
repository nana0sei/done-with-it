import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colors from "@/config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const { type, isInternetReachable } = useNetInfo();

  if (type !== "unknown" && isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});
