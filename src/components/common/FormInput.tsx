import { Input } from "@chakra-ui/react";

interface FormInputType {
  type: string;
  name: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  id: string;
}
const FormInput: React.FC <FormInputType>= ({
  type,
  name,
  placeholder,
  onChange,
  value,
  onBlur,
  id,
  ...ber
}: FormInputType) => {
  return (
    <>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        id={id}
        {...ber}
      />
    </>
  );
};

export default FormInput;
