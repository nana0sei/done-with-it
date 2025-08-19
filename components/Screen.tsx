import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style: object;
}

const Screen = ({ children, style }: Props) => {
  return <View style={[styles.screen, style]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
