import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "@/config/colors";

const ErrorAlert = ({ error }: { error: string }) => {
  if (!error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorAlert;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
