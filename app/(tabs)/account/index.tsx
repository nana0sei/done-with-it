import AuthContext from "@/auth/context";
import Icon from "@/components/Icon";
import ListItem from "@/components/ListItem";
import ListItemSeparator from "@/components/ListItemSeparator";
import Screen from "@/components/Screen";
import colors from "@/config/colors";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const AccountPage = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  return (
    <Screen style={styles.screen}>
      {/* profile details */}
      <View style={styles.container}>
        <ListItem
          title={authContext?.user?.name || ""}
          subtitle={authContext?.user?.email || ""}
          image={require("@/assets/images/mosh.jpg")}
        />

        {/* listings and messages */}
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => router.navigate(item.targetScreen as any)}
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
  },

  screen: {
    backgroundColor: colors.light,
  },
});

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
    targetScreen: "/account/my-listings",
  },

  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
    targetScreen: "/account/messages",
  },
];
