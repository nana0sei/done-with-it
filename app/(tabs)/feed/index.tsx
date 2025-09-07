import ActivityIndicator from "@/components/ActivityIndicator";
import AppButton from "@/components/AppButton";
import AppText from "@/components/AppText";
import Card from "@/components/Card";
import Screen from "@/components/Screen";
import colors from "@/config/colors";
import useRefreshOnFocus from "@/config/refetchOnFocus";
import useListings from "@/hooks/useListings";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

const HomePage = () => {
  const { data: listings, isLoading, error, refetch } = useListings();
  const router = useRouter();

  useRefreshOnFocus(refetch);

  if (isLoading)
    return (
      <Screen style={styles.screen}>
        <ActivityIndicator visible />
      </Screen>
    );

  if (error || !listings)
    return (
      <Screen style={styles.screen}>
        <AppText> Couldn't retrieve the listings</AppText>
        <AppButton title="Retry" onPress={refetch} />
      </Screen>
    );

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$ ${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() =>
              router.push({
                pathname: `/(tabs)/feed/[listing]`,
                params: { listing: JSON.stringify(item) },
              })
            }
          />
        )}
      />
    </Screen>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
});
