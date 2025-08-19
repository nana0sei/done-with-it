import { DefaultTheme } from "@react-navigation/native";
import colors from "./colors";

const navigtionTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

export default navigtionTheme;
