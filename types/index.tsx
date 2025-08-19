import { default as MaterialCommunityIconsGlyphs } from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json";

export interface Item {
  label: string;
  value: number;
  backgroundColor: string;
  icon: any;
}

export type MaterialCommunityIconName =
  keyof typeof MaterialCommunityIconsGlyphs;
