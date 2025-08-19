import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { Item } from "@/types";

interface Props {
  item: Item;
  onPress: () => void;
}

const PickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
