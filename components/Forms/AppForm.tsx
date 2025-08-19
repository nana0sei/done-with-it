import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  children: ReactNode;
  defaultValues?: Record<string, any>;
}

const AppForm = ({ children, defaultValues }: Props) => {
  const methods = useForm({ defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default AppForm;
