import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

interface Props {
  children?: ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  if (!children) return null;

  return <AppText style={styles.error}>{children}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
