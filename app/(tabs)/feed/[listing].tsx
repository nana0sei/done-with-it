import AppText from "@/components/AppText";
import ListItem from "@/components/ListItem";
import colors from "@/config/colors";
import { Listing } from "@/types";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const ListingDetailsScreen = () => {
  const params = useLocalSearchParams();
  const listing = JSON.parse(params.listing as string) as Listing;
  return (
    <View>
      <Image source={{ uri: listing.images[0].url }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("@/assets/images/mosh.jpg")}
            title="Mosh"
            subtitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 10,
  },
  title: { fontSize: 24, fontWeight: "500" },
  userContainer: {
    marginVertical: 40,
  },
});
