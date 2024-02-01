import { IproductData } from "../../types";
import { ActionType } from "../ActionType";

interface Item {
  id: number;
  // Add other properties of the item here
}


interface CartState {
  total: number;
  arr: IproductData[] ;
}

interface AddToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: Item;
}

interface RemoveFromCartAction {
  type: ActionType.REMOVE_TO_CART;
  payload: Item;
}

type CartAction = AddToCartAction | RemoveFromCartAction;

const initialState: CartState = {
  total: 0,
  arr: [],
};

function CartReducer(state = initialState, action: CartAction): CartState {
  const temp:any = { ...action.payload, total: 1 };

  const removeitem = state?.arr?.filter((item) => item !== action.payload);
  const itemprice = state?.arr?.findIndex(
    (item) => item?.id === action.payload?.id
  );

  switch (action.type) {
    // Adding the item to the cart.
    case ActionType.ADD_TO_CART:
      if (itemprice >= 0) {
        state.arr[itemprice].total += 1;
        return {
          ...state,
          total: state.total + 1,
          arr: [...state.arr],
        };
      } else {
        return {
          ...state,
          total: state.total + 1,
          arr: [...state.arr, temp],
        };
      }

    // Removing the item from the cart.
    case ActionType.REMOVE_TO_CART:
      const itemprice1 = state.arr.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemprice1 >= 0 && state.arr[itemprice1].total > 1) {
        state.arr[itemprice1].total -= 1;
        return {
          ...state,
          total: state.total - 1,
          arr: [...state.arr],
        };
      } else {
        return {
          ...state,
          total: state.total - 1,
          arr: [...removeitem],
        };
      }

    default:
      return { ...state };
  }
}

export default CartReducer;
