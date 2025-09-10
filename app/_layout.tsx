import { lightTheme } from "@/config/navigationTheme";
import { ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OfflineNotice from "@/components/OfflineNotice";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider value={lightTheme}>
          <OfflineNotice />
          <Stack screenOptions={{ headerShown: false }} />
          <StatusBar style="auto" />
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
