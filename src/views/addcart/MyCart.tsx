import MyCartDetail from "../../components/mycart/MyCartDetail";
import { useTypedSelector } from "../../components/common/hook/Hook";
import MyCartImg from "../../components/mycart/MyCartImg";

const MyCart: React.FC = () => {
  const items = useTypedSelector((state) => state.CartReducer.arr);

  return (
    <>
      <div className="addcart-container">
        <div className="container">
          <div className="shopping-cart">
            <ul className="shopping-cart-items p-0">
              {items.length ? (
                items.map((item) => {
                  return (
                    <div key={item.id}>
                      <li className="clearfix" >
                        <MyCartImg item={item} />
                        <MyCartDetail item={item} />
                      </li>
                      <hr></hr>
                    </div>
                  );
                })
              ) : (
                <p className="col text-center fs-4">
                  OOPS.... Your cart is empty :(
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
