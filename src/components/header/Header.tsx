import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";

import Profile from "../profile/Profile";
import MyCart from "../../views/addcart/MyCart";
import { useTypedSelector } from "../common/hook/Hook";



const Header:React.FC=()=> {
   const items = useTypedSelector((state) => state.CartReducer.arr);
   const [view, setView] = useState<boolean>(false);

   /* A function that is called when the user clicks on the cart button. */
   const handleClick = (e: React.MouseEvent<HTMLElement>) => {
     e.preventDefault();
     setView((prev) => !prev);
   };
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Link to="/product" id="home">
            <Navbar.Brand className="text-bold text-light">Home</Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <button
              type="button"
              className="cart-item btn d-flex justify-content-center align-items-center  "
              id="mycart"
              onClick={handleClick}
            >
              <p className="m-0 fs-5 text-light text-bolder"> Cart </p>
              <HiShoppingCart className="fs-4 text-light " />
              <p className="item-number">
                {items.length === 0 ? null : (
                  <p className="item-button m-0 text-white "> {items.length}</p>
                )}
              </p>
            </button>
            {view && <MyCart />}
            <Profile />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
