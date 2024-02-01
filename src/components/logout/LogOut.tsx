import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Logout } from "tabler-icons-react";

import { messages } from "../../constants/messages";

const LogOut:React.FC=()=> {
  const handleclick = () => {
    /* Getting the data from local storage. */
    const userData = JSON.parse(localStorage.getItem("Users") as string) || [];

    /* Updating the isLogin property of the userData object. */
    const updateData = userData.map((item: object) => {
      return {
        ...item,
        isLogin: false,
      };
    });

    localStorage.setItem("Users", JSON.stringify(updateData));
    toast.success(messages.logout);
    /* Removing the item from local storage. */
    JSON.stringify(localStorage.removeItem("isactive"));
  };

  return (
    <>
      <Link
        to="/login"
        className=" w-100 p-0"
        id="logout"
        onClick={() => handleclick()}
      >
        <Logout className="d-inline" /> Logout
      </Link>
    </>
  );
}

export default LogOut;
