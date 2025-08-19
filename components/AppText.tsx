import React, { ReactNode } from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import defaultStyles from "../config/styles";

interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}

const AppText = ({ style, children, ...otherProps }: Props) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
