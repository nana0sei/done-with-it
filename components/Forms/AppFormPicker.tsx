import React from "react";
import { Controller, useFormContext } from "react-hook-form";
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
    control,
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <AppPicker
            items={items}
            numberOfColumns={numberOfColumns}
            onSelectItem={onChange}
            placeholder={placeholder}
            selectedItem={value}
            PickerItemComponent={PickerItemComponent}
            width={width}
          />
        )}
      />

      {errors[name] && (
        <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
      )}
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
