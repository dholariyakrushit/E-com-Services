import { Stack } from "@chakra-ui/react";
import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface ratingType {
  rating: number;
}

const Rating:React.FC<ratingType>=({ rating }: ratingType) =>{
  return (
    <Stack direction={"row"} alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
                className="text-warning"
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                className="text-warning"
                key={i}
                style={{ marginLeft: "1" }}
              />
            );
          }
          return (
            <BsStar
              className="text-warning"
              key={i}
              style={{ marginLeft: "1" }}
            />
          );
        })}
    </Stack>
  );
}
export default Rating;
