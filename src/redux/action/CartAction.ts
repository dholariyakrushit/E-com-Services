import { IproductData } from "../../types";
import { ActionType } from "../ActionType";

export const addTocart = (item: IproductData) => ({
  type: ActionType.ADD_TO_CART,
  payload: item,
});

export const removeToCart = (item: IproductData) => ({
  type: ActionType.REMOVE_TO_CART,
  payload: item,
});
