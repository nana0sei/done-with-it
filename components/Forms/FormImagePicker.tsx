import { useFormContext } from "react-hook-form";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }: { name: string }) => {
  // const { errors, setFieldValue, touched, values } = useFormikContext();
  const {
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const imageUris = getValues(name);

  const handleAdd = (uri: string) => {
    setValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setValue(
      name,
      imageUris.filter((imageUri: string) => imageUri !== uri)
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
      )}{" "}
    </>
  );
};

export default FormImagePicker;
