import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

const ActivityIndicator = ({ visible = false }: { visible?: boolean }) => {
  if (!visible) return null;
  return (
    <LottieView
      source={require("@/assets/animations/loader.json")}
      autoPlay
      loop
      style={styles.animation}
    />
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  animation: {
    flex: 1,
  },
});
