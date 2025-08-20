import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "@/components/AppText";
import ListItem from "@/components/ListItem";
import colors from "@/config/colors";
import { useLocalSearchParams } from "expo-router";
import { Listing } from "@/types";

const ListingDetailsScreen = () => {
  const listing = useLocalSearchParams<Listing>();
  return (
    <View>
      <Image
        source={{ uri: listing.images[0].fileName }}
        style={styles.image}
      />
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
