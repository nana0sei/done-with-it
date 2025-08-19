import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  initialValues: any;
  onSubmit: () => void;
  children: ReactNode;
}

const AppForm = ({ initialValues, onSubmit, children }: Props) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default AppForm;
