import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../../redux/reducers/RootReducer";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
