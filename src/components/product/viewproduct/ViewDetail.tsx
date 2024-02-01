import {
  Box,
  List,
  ListItem,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";

import ListItems from "./ListItems";
import { IproductData } from "../../../types";
interface productType {
  data: IproductData;
}
const ViewDetail: React.FC<productType> = ({ data }: productType) => {
  return (
    <>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={"column"}
        divider={<StackDivider />}
      >
        <VStack spacing={{ base: 4, sm: 6 }}>
          <Text fontSize={"lg"}>{data.description}</Text>
        </VStack>

        <Box>
          <Text
            fontSize={{ base: "16px", lg: "18px" }}
            fontWeight={"500"}
            textTransform={"uppercase"}
            mb={"4"}
          >
            Product Details
          </Text>

          <List spacing={2} className="d-flex flex-column p-0">
            <ListItems label={"Brand"} detail={data.brand ? data.brand : ''}></ListItems>
            <ListItems label={"Category"} detail={data.category}></ListItems>
            <ListItems label={"Rating"} detail={data.rating}></ListItems>
            <ListItems label={"Stock"} detail={data.stock}></ListItems>
            <ListItem>
              <Text className="fw-bold">{data.discountPercentage} % OFF</Text>{" "}
            </ListItem>
          </List>
        </Box>
      </Stack>
    </>
  );
};

export default ViewDetail;
