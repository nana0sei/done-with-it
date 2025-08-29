import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface Props {
  progress?: number;
  visible?: boolean;
}
const UploadScreen = ({ progress = 0, visible = false }: Props) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText>{progress * 100}%</AppText>
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
