import CategoryPickerItem from "@/components/CategoryPickerItem";
import AppForm from "@/components/Forms/AppForm";
import AppFormField from "@/components/Forms/AppFormField";
import AppFormPicker from "@/components/Forms/AppFormPicker";
import FormImagePicker from "@/components/Forms/FormImagePicker";
import SubmitButton from "@/components/Forms/SubmitButton";
import Screen from "@/components/Screen";
import useLocation from "@/hooks/useLocation";
import React from "react";
import { StyleSheet } from "react-native";
import z from "zod";

const NewListingPage = () => {
  const location = useLocation();
  const defaultValues: ListingData = {
    title: "",
    price: "",
    category: null,
    description: "",
    images: [],
  };

  const handleSubmit = (values: ListingData) => {
    console.log("location", location);
    console.log("Form values:", values);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        defaultValues={defaultValues}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" maxLength={255} placeholder="Title" />

        <AppFormField
          name="price"
          maxLength={8}
          placeholder="Price"
          keyboardType="numeric"
          width={120}
        />

        <AppFormPicker
          width="50%"
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />

        <AppFormField
          name="description"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={255}
          multiline
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Post" onSubmit={handleSubmit} />
      </AppForm>
    </Screen>
  );
};

export default NewListingPage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const validationSchema = z.object({
  title: z
    .string()
    .min(1, "Name must be at least three characters long")
    .max(225, "Maximum character limit exceeded"),
  price: z
    .string()
    .min(1, "Invalid price")
    .max(225, "Maximum price limit exceeded"),
  category: z.object().nullable(),
  description: z.string().optional(),
  images: z
    .array(z.object({ uri: z.string() }))
    .min(1, "Please select at least one image"),
});

type ListingData = z.infer<typeof validationSchema>;

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "crimson",
    icon: "floor-lamp",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "darkturquoise",
    icon: "shoe-heel",
  },
  { label: "Cameras", value: 3, backgroundColor: "gold", icon: "camera" },
  {
    label: "Movies & Music",
    value: 4,
    backgroundColor: "royalblue",
    icon: "headphones",
  },
  {
    label: "Sports",
    value: 5,
    backgroundColor: "lightskyblue",
    icon: "basketball",
  },
  { label: "Games", value: 6, backgroundColor: "orange", icon: "cards" },
];
