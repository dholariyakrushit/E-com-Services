import React, { useEffect, useState } from "react";
import { Container, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import { url } from "../../api/api";
import Header from "../header/Header";
import ViewHeader from "./viewproduct/ViewHeader";
import ViewDetail from "./viewproduct/ViewDetail";
import ViewCarousel from "./viewproduct/ViewCarousel";
import { IproductData } from "../../types";
import AddCartButton from "./viewproduct/AddCartButton";

const ViewProduct: React.FC = () => {
  const [data, setData] = useState<IproductData>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    url(Number(id))
      .then((res) => setData(res.data))
      .catch((error) => alert(error));
  }, [id]);

  return (
    <>
      <Header />
      {data ? (
        <Container maxW={"7xl"} className="viewproduct" key={data.id}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <ViewCarousel data={data} />
            <Stack spacing={{ base: 6, md: 10 }}>
              <ViewHeader data={data} />
              <ViewDetail data={data} />
              <AddCartButton data={data} />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      ) : (
        <div className="loading">
          {" "}
          <BeatLoader color="#36d7b7" />
        </div>
      )}
    </>
  );
};

export default ViewProduct;
