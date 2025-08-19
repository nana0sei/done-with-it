import React from "react";
import { useFormContext } from "react-hook-form";
import { DimensionValue, StyleSheet } from "react-native";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { Item } from "@/types";

interface Props {
  items: Item[];
  name: string;
  numberOfColumns?: number;
  placeholder: string;
  width?: DimensionValue;
  PickerItemComponent: any;
}

const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}: Props) => {
  // const { errors, setFieldValue, touched, values } = useFormikContext();

  const {
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setValue(name, item)}
        placeholder={placeholder}
        selectedItem={getValues(name)}
        PickerItemComponent={PickerItemComponent}
        width={width}
      />
      {errors[name] && (
        <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
      )}
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
