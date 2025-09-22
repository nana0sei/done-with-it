import { lightTheme } from "@/config/navigationTheme";
import { ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AuthContext, { User } from "@/auth/context";
import OfflineNotice from "@/components/OfflineNotice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import authStorage from "@/auth/storage";
import { jwtDecode } from "jwt-decode";
import * as SplashScreen from "expo-splash-screen";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    try {
      const token = await authStorage.getToken();

      if (!token) return;
      else {
        setUser(jwtDecode(token));
      }
    } catch (error) {
      console.error("Failed to restore token", error);
    } finally {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    restoreToken();
  }, []);

  if (!isReady) return null;

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
