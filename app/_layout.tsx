import { lightTheme } from "@/config/navigationTheme";
import { ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AuthContext, { User } from "@/auth/context";
import OfflineNotice from "@/components/OfflineNotice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider value={lightTheme}>
            <OfflineNotice />
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Protected guard={!!user}>
                <Stack.Screen name="(tabs)" />
              </Stack.Protected>

              <Stack.Protected guard={!user}>
                <Stack.Screen name="index" />
                <Stack.Screen name="login" />
                <Stack.Screen name="register" />
              </Stack.Protected>
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}
