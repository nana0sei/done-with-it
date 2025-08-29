import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import * as Progress from "react-native-progress";
import colors from "@/config/colors";

interface Props {
  progress?: number;
  visible?: boolean;
}
const UploadScreen = ({ progress = 0, visible = false }: Props) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar
          progress={progress}
          color={colors.primary}
          width={200}
          indeterminate
        />
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
