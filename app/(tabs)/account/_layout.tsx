import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="account" />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
