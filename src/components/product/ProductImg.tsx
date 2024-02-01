import { Image, Text } from "@chakra-ui/react";
import React from "react";

import { IproductData } from "../../types";

type itemType = {
  item: IproductData;
};
const ProductImg: React.FC<itemType> = ({ item }: itemType) => {
  return (
    <div>
      <Image
        src={item.thumbnail}
        alt="Green double couch with wooden legs"
        borderRadius="lg"
        height="230px"
        className="m-auto product-img"
      />
      <Text className="  descount-percentage">-{item.discountPercentage}%</Text>
    </div>
  );
};

export default ProductImg;
