import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import React, { ReactNode } from "react";

import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  image?: ImageSourcePropType;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  IconComponent?: any;
  renderRightActions?: () => ReactNode;
}

const ListItem = ({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  IconComponent,
}: Props) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.container}>
            {image && <Image source={image} style={styles.image} />}
            {IconComponent}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subtitle && (
                <AppText style={styles.subtitle} numberOfLines={2}>
                  {subtitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.medium}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35, //for a rounded look, border radius should be at least half the size on item
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
