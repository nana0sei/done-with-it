import { Stack } from "expo-router";
import React from "react";

const AccountTabLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Account" }} />
      <Stack.Screen
        name="messages"
        options={{ headerShown: true, title: "Messages" }}
      />
    </Stack>
  );
};

export default AccountTabLayout;
