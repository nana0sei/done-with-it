import { default as MaterialCommunityIconsGlyphs } from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json";

export interface Item {
  label: string;
  value: number;
  backgroundColor: string;
  icon: any;
}

export interface Listing {
  id: number;
  title: string;
  images: { fileName: string }[];
  categoryId: number;
  price: number;
  userId: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

export type MaterialCommunityIconName =
  keyof typeof MaterialCommunityIconsGlyphs;
