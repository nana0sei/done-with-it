import AppButton from "../AppButton";

interface Props {
  title?: string;
  onSubmit: () => void;
}
const SubmitButton = ({ title = "Submit", onSubmit }: Props) => {
  return <AppButton title={title} onPress={onSubmit} />;
};

export default SubmitButton;
