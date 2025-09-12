import { lightTheme } from "@/config/navigationTheme";
import { ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { Redirect, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OfflineNotice from "@/components/OfflineNotice";
import AuthContext from "@/auth/context";
import { useContext, useState } from "react";

const queryClient = new QueryClient();

export default function RootLayout() {
  const [user, setUser] = useState<object | null>(null);

  if (user) <Redirect href={`/(tabs)/feed`} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider value={lightTheme}>
            <OfflineNotice />
            <Stack screenOptions={{ headerShown: false }} />
            <StatusBar style="auto" />
          </ThemeProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}
