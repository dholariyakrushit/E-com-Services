import { ListItem, Text } from "@chakra-ui/react";
interface productType {
  detail: string | number;
  label: string;
}
const ListItems:React.FC<productType>=({ detail, label }: productType) =>{
  return (
    <ListItem>
      <Text as={"span"} fontWeight={"bold"}>
        {label}:
      </Text>{" "}
      {detail}
    </ListItem>
  );
}

export default ListItems;
