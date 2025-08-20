import { Stack } from "expo-router";
import React from "react";

const AccountTabLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="messages" options={{ headerShown: true }} />
    </Stack>
  );
};

export default AccountTabLayout;
