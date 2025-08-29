import colors from "@/config/colors";
import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

interface Props {
  progress?: number;
  visible?: boolean;
  onDone: () => void;
}
const UploadScreen = ({ progress = 0, visible = false, onDone }: Props) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
            indeterminate
          />
        ) : (
          <LottieView
            source={require("@/assets/animations/done.json")}
            autoPlay
            loop={false}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  animation: {
    width: 150,
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
