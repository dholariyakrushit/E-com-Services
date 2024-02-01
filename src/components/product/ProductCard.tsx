import { Text, Stack, Heading } from "@chakra-ui/react";

import Rating from "./Rating";
import { IproductData } from "../../types";

interface itemType {
  item: IproductData;
}

const ProductCard: React.FC<itemType> = ({ item }: itemType) => {
  return (
    <>
      <Stack className="cart-detail" mt="6" spacing="3">
        <Heading size="md" className="text-primary m-0">
          {item.title}
        </Heading>

        <Text className="m-0 ">Category: {item.category}</Text>
        <Text className="m-0 ">Brand: {item.brand}</Text>

        <Text>
          <Rating rating={item.rating} />
        </Text>

        <Text color="red.600" fontSize="2xl" className="fw-bold">
          $ {item.price}
        </Text>
      </Stack>
    </>
  );
};

export default ProductCard;
