import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { CardBody, Card } from "@chakra-ui/react";

import { fetchPosts } from "../../redux/action/action";
import Header from "../../components/header/Header";
import ProductCard from "../../components/product/ProductCard";
import ProductImg from "../../components/product/ProductImg";
import { IproductData } from "../../types";
import { useTypedSelector } from "../../components/common/hook/Hook";

const Product: React.FC = () => {
  const [active, setActive] = useState(0);
  const dispatch: any = useDispatch();

  const items = useTypedSelector((state) => state.reducer.posts);

  const handleIncrement = (newnumber: number) => {
    setActive(newnumber);
    dispatch(fetchPosts(newnumber * 8));
  };

  let numitems = [];
  for (let number = 0; number < 100 / 8; number++) {
    numitems.push(
      <Pagination.Item
        key={number}
        active={active === number}
        onClick={() => handleIncrement(number)}
      >
        {number + 1}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    dispatch(fetchPosts(0));
  }, [dispatch]);

  return (
    <>
      <Header />

      {
        <div className="row  my-4 cart-row">
          {items?.products ? (
            <>
              {items?.products?.map((item: IproductData) => (
                <Card maxW="sm" key={item.id} className="product-card">
                  <Link to={`/viewproduct/${item.id}`} className="cart-link">
                    <CardBody id="view" className="card-body">
                      <ProductImg item={item} />
                      <ProductCard item={item} />
                    </CardBody>
                  </Link>
                </Card>
              ))}
              <Pagination className="pagination-line">{numitems}</Pagination>
            </>
          ) : (
            <div className="loading">
              <BeatLoader color="#36d7b7" />
            </div>
          )}
        </div>
      }
    </>
  );
};

export default Product;
