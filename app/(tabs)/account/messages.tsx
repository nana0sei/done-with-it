import ListItem from "@/components/ListItem";
import ListItemDeleteAction from "@/components/ListItemDeleteAction";
import ListItemSeparator from "@/components/ListItemSeparator";
import Screen from "@/components/Screen";
import colors from "@/config/colors";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

const MessagesPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message: any) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        refreshing={refreshing}
        onRefresh={() => setMessages([initialMessages[0]])}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log("Selected", item)}
            title={item.title}
            subtitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Screen>
  );
};

export default MessagesPage;

const initialMessages = [
  {
    id: 1,
    title: "Mosh",
    description: "Hi Nana!",
    image: require("@/assets/images/mosh.jpg"),
  },
  {
    id: 2,
    title: "Hamedani",
    description: "Is this still available?",
    image: require("@/assets/images/mosh.jpg"),
  },
];
