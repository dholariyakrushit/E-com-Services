import { Route, Routes } from "react-router-dom";
import React from "react";

const SignUp = React.lazy(() => import("../views/signup/SignUp"));
const LogIn = React.lazy(() => import("../views/login/LogIn"));
const ForgatePass = React.lazy(
  () => import("../components/editeprofile/ForgatePass")
);
const Product = React.lazy(() => import("../views/product/Product"));
const ViewProduct = React.lazy(
  () => import("../components/product/ViewProduct")
);
const EditeProfile = React.lazy(
  () => import("../views/editeprofile/EditeProfile")
);
const PrivateRoutes = React.lazy(() => import("../app/PrivateRoutes"));

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Product />} />
          <Route path="/upadatepass" element={<ForgatePass />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />
          <Route path="/editeprofile" element={<EditeProfile />} />
        </Route>

        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Router;
