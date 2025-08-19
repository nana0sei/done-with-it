import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  children: ReactNode;
  defaultValues?: Record<string, any>;
  validationSchema: z.ZodObject<any>;
}

const AppForm = ({ children, defaultValues, validationSchema }: Props) => {
  const methods = useForm({
    defaultValues,
    mode: "onTouched",
    resolver: zodResolver(validationSchema),
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default AppForm;
