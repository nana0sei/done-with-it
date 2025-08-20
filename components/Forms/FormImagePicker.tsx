import { useFormContext, useWatch } from "react-hook-form";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }: { name: string }) => {
  const {
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  const imageUris: string[] =
    useWatch({
      control,
      name,
    }) || [];

  const handleAdd = (uri: string) => {
    setValue(name, [...imageUris, uri], { shouldValidate: true });
  };

  const handleRemove = (uri: string) => {
    setValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri),
      { shouldValidate: true }
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      {errors[name] && (
        <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
      )}
    </>
  );
};

export default FormImagePicker;
