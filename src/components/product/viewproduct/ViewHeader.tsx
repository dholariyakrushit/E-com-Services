import { Box, Heading, Text } from "@chakra-ui/react";

import { IproductData } from "../../../types";

interface productType {
  data: IproductData;
}
const ViewHeader: React.FC<productType> = ({ data }: productType) => {
  return (
    <>
      <Box as={"header"}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
        >
          {data.title}
        </Heading>
        <Text
          color={"gray.900"}
          _dark={{ color: "gray.400" }}
          fontWeight={300}
          fontSize={"2xl"}
        >
          $ {data.price} USD
        </Text>
      </Box>
    </>
  );
};

export default ViewHeader;
