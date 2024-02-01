import React from "react";

import { IproductData } from "../../types";

interface itemtype {
  item: IproductData;
}
const MyCartImg:React.FC<itemtype>=({ item }: itemtype) =>{
  return (
    <>
      <img src={item.thumbnail} alt="item1" width="70px" height="10px" />
    </>
  );
}

export default MyCartImg;
