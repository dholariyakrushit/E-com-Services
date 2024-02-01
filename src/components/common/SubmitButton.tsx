import { Button } from "@chakra-ui/react";
import React from "react";

interface SubmitButtonType {
  loadingText: string;
  id: undefined | string;
  type: "submit" | "reset" | undefined;
  size: string;
  bg: string;
  color: string;
  label: string;
}

const SubmitButton:React.FC<SubmitButtonType> =({
  loadingText,
  id,
  type,
  label,
  size,
  bg,
  color,
}: SubmitButtonType)=> {
  return (
    <>
      <Button
        loadingText={loadingText}
        id={id}
        type={type}
        size={size}
        bg={bg}
        color={color}
      >
        {label}
      </Button>
    </>
  );
}

export default SubmitButton;
