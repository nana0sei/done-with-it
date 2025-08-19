import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormContext } from "react-hook-form";
import { DimensionValue } from "react-native";

interface Props {
  name: string;
  width?: DimensionValue;
}

const AppFormField = ({ name, width, ...otherProps }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <AppTextInput {...register} {...otherProps} width={width} />
      {errors[name] && (
        <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
      )}
    </>
  );
};

export default AppFormField;
