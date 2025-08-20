import NewListingButton from "@/components/NewListingButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";

const AppLayout = () => {
  const router = useRouter();
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          title: "Feed",
        }}
      />
      <Tabs.Screen
        name="new-listing"
        options={() => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => router.navigate("/(tabs)/new-listing")}
            />
          ),
          title: "New Listing",
        })}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          title: "Account",
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
