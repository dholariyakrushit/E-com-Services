import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { editeSchema } from "../../validation/schemas";
import Header from "../../components/header/Header";
import { messages } from "../../constants/messages";
import SubmitButton from "../../components/common/SubmitButton";
import FormInput from "../../components/common/FormInput";
import { Iform } from "../../types";

interface EditeProfileType {
  firstname: string;
  lastname: string;
  contact: string;
  email: string;
  isLogin?: boolean;
}
const EditeProfile: React.FC = () => {
  let userData = localStorage.getItem("Users");
  userData = userData ? JSON.parse(userData) : [];

  /* Finding the user that is logged in. */
  let logindata =
    Array.isArray(userData) &&
    userData.find((user: EditeProfileType) => user.isLogin === true);

  const initialValues: EditeProfileType = {
    firstname: logindata.firstname,
    lastname: logindata.lastname,
    contact: logindata.contact,
    email: logindata.email,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: editeSchema,
    onSubmit: (values) => {
      /* Filtering out all the users that are not logged in. */
      const useremail =
        Array.isArray(userData) &&
        userData.filter((item: Iform) => item.isLogin === false);

      /* Updating the user data. */
      const updateData =
        Array.isArray(userData) &&
        userData.map((item: Iform) => {
          if (item.isLogin === true) {
            if (
              Array.isArray(useremail) &&
              useremail.some((item: Iform) => item.email === values.email)
            ) {
              toast.error(messages.emailExists);
              return {
                ...item,
              };
            } else {
              toast.success(messages.profileUpdate);
              return {
                ...item,
                firstname: values.firstname,
                lastname: values.lastname,
                contact: values.contact,
                email: values.email,
              };
            }
          } else {
            return {
              ...item,
            };
          }
        });

      localStorage.setItem("Users", JSON.stringify(updateData));
    },
  });

  return (
    <>
      <Header />
      <div className="container ">
        <Form className="form m-auto" onSubmit={formik.handleSubmit}>
          <Flex
            minH={"93vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Update Profile
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy all of our cool features ✌️
                </Text>
              </Stack>

              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="firstname">
                        <FormLabel>First Name</FormLabel>
                        <FormInput
                          type="text"
                          name="firstname"
                          id="firstname"
                          placeholder="First Name"
                          onChange={formik.handleChange}
                          value={formik.values.firstname}
                          onBlur={formik.handleBlur}
                        />
                      </FormControl>
                      {formik.touched.firstname && formik.errors.firstname ? (
                        <p className="errors">{formik.errors.firstname}</p>
                      ) : null}
                    </Box>
                    <Box>
                      <FormControl id="lastname">
                        <FormLabel>Last Name</FormLabel>
                        <FormInput
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="Last Name"
                          onChange={formik.handleChange}
                          value={formik.values.lastname}
                          onBlur={formik.handleBlur}
                        />
                      </FormControl>
                      {formik.touched.lastname && formik.errors.lastname ? (
                        <p className="errors">{formik.errors.lastname}</p>
                      ) : null}
                    </Box>
                  </HStack>

                  <FormControl id="contact">
                    <FormLabel>Contact number</FormLabel>
                    <FormInput
                      id="contact"
                      type="text"
                      name="contact"
                      placeholder="contact number"
                      onChange={formik.handleChange}
                      value={formik.values.contact}
                      onBlur={formik.handleBlur}
                    />
                  </FormControl>
                  {formik.touched.contact && formik.errors.contact ? (
                    <p className="errors">{formik.errors.contact}</p>
                  ) : null}

                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <FormInput
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </FormControl>
                  {formik.touched.email && formik.errors.email ? (
                    <p className="errors">{formik.errors.email}</p>
                  ) : null}

                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Link
                      to={"/upadatepass"}
                      color={"blue.400"}
                      id="updatepassword"
                    >
                      Update Password?
                    </Link>
                  </Stack>

                  <Stack spacing={10} pt={2}>
                    <SubmitButton
                      id="submit"
                      type="submit"
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      label={"Submit"}
                    />
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Form>
      </div>
    </>
  );
};

export default EditeProfile;
