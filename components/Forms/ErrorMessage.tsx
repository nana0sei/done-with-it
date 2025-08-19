import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

interface Props {
  error?: string;
  visible?: boolean;
}

const ErrorMessage = ({ error, visible = false }: Props) => {
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
