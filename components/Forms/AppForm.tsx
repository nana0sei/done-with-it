import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  onSubmit: () => void;
  children: ReactNode;
}

const AppForm = ({ onSubmit, children }: Props) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default AppForm;
