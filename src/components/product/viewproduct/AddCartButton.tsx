import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

import { addTocart } from "../../../redux/action/CartAction";
import { IproductData } from "../../../types";

interface productType {
  data: IproductData;
}
function AddCartButton({ data }:productType) {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        onClick={() => {
          dispatch(addTocart(data));
        }}
        id="addcart"
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
      >
        Add to cart
      </Button>
    </>
  );
}

export default AddCartButton;
