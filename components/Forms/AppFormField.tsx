import { MaterialCommunityIconName } from "@/types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DimensionValue } from "react-native";
import AppTextInput, { AppTextInputProps } from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface Props extends AppTextInputProps {
  name: string;
  width?: DimensionValue;
  icon?: MaterialCommunityIconName;
}

const AppFormField = ({ name, width, icon, ...otherProps }: Props) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            icon={icon}
            width={width}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            {...otherProps}
          />
        )}
      />
      {errors[name] && (
        <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
      )}
    </>
  );
};

export default AppFormField;
