import React from "react";
import { useDispatch } from "react-redux";


import { IproductData } from "../../types";
import { addTocart, removeToCart } from "../../redux/action/CartAction";

interface itemtype {
  item: IproductData;
}
const MyCartDetail:React.FC<itemtype>=({ item }: itemtype)=> {
  
  const dispatch = useDispatch();
  return (
    <>
      <span>
        <span className="item-name">{item.brand}</span>
        <span className="item-price">${item.price && item.price * item.total} </span>
        <span className="item-quantity">Quantity: {item.total}</span>
        <span className=" d-flex">
          <button
            className="btn btn-primary p-0 px-2"
            onClick={() => {
              dispatch(removeToCart(item));
            }}
          >
            -
          </button>

          <span className="mx-2 form-control form-control-sm ">
            {" "}
            x {item.total}
          </span>

          <button
            className="btn btn-primary p-0 px-2"
            id="increment"
            onClick={() => {
              dispatch(addTocart(item));
            }}
          >
            +
          </button>
        </span>
      </span>
    </>
  );
}

export default MyCartDetail;
