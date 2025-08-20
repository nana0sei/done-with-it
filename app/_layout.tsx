import { darkTheme, lightTheme } from "@/config/navigationTheme";
import { ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider value={lightTheme}>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
