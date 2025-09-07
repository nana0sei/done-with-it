import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

const ActivityIndicator = ({ visible = false }: { visible?: boolean }) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView
        source={require("@/assets/animations/loader.json")}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  animation: {
    flex: 1,
    width: 150,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
