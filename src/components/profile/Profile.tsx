import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import LogOut from "../logout/LogOut";

const Profile:React.FC =()=> {
  return (
    <>
      <Menu>
        <MenuButton as={Button} className="btn btn-light ">
          Profile
        </MenuButton>

        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>
              <Link className="p-0" to="/editeprofile" id="updateProfile">
                <CgProfile className="fs-4 d-inline md-4" /> Update Profile
              </Link>
            </MenuItem>
            <hr className="m-2" />
            <MenuItem>
              {" "}
              <LogOut />{" "}
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}

export default Profile;
