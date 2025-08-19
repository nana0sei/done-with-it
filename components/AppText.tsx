import React from "react";
import { Text, View } from "react-native";
import defaultStyles from "../config/styles";

interface Props {
  style: object;
}

const AppText = ({ style, ...otherProps }: Props) => {
  return (
    <View>
      <Text style={[defaultStyles.text, style]} {...otherProps} />
    </View>
  );
};

export default AppText;
