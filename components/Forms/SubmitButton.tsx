import React from "react";
import { useFormContext } from "react-hook-form";
import AppButton from "../AppButton";

interface Props {
  title: string;
  onSubmit: (values: any) => void;
  resetOnSuccess?: boolean;
}

const SubmitButton = ({ title, onSubmit, resetOnSuccess = false }: Props) => {
  const { handleSubmit, reset } = useFormContext();

  const handleFormSubmit = async (values: any) => {
    try {
      await onSubmit(values);
      if (resetOnSuccess) reset();
    } catch (error) {
      console.error(error);
    }
  };
  return <AppButton title={title} onPress={handleSubmit(handleFormSubmit)} />;
};

export default SubmitButton;
