import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Flex } from "@chakra-ui/react";

import { IproductData } from "../../../types";
interface productType {
  data: IproductData;
}
const ViewCarousel: React.FC<productType> = ({ data }: productType) => {
  return (
    <>
      <Flex>
        <Carousel className="clider-img ">
          {data?.images &&
            data?.images.map((data, index) => (
              <div key={index}>
                <img className="img-fluid" src={data} alt="nothing" />
              </div>
            ))}
        </Carousel>
      </Flex>
    </>
  );
};

export default ViewCarousel;
