import React from "react";
import { useFormContext } from "react-hook-form";
import AppButton from "../AppButton";

interface Props {
  title: string;
  onSubmit: (values: any) => void;
}

const SubmitButton = ({ title, onSubmit }: Props) => {
  const { handleSubmit } = useFormContext();
  return <AppButton title={title} onPress={handleSubmit(onSubmit)} />;
};

export default SubmitButton;
