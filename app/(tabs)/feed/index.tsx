import Card from "@/components/Card";
import Screen from "@/components/Screen";
import colors from "@/config/colors";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "@/api/listings";
import { Listing } from "@/types";
import { useRouter } from "expo-router";

const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  const router = useRouter();

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = (await listingsApi.getListings()) as unknown as Listing[];
    setListings(response);
  };
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
