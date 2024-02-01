import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { logInSchema } from "../../validation/schemas";
import { decrydata } from "../../utils/utils";
import { messages } from "../../constants/messages";
import FormInput from "../../components/common/FormInput";
import SubmitButton from "../../components/common/SubmitButton";

interface FormData {
  email: string;
  password: string;
  isLogin?: boolean;
}

const initialValues: FormData = {
  email: "",
  password: "",
};

const LogIn: React.FC = () => {
  const navigate = useNavigate();
  let data: string | null = localStorage.getItem("isactive");
  data = data ? JSON.parse(data) : null;

  useEffect(() => {
    if (data) {
      navigate("/product");
    }
  }, [data, navigate]);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: logInSchema,
    onSubmit: (values) => {
      /* Getting the data from local storage and parsing it into an array. */
      let userData = localStorage.getItem("Users");
      userData = userData ? JSON.parse(userData) : [];

      /* Checking the email and password from the local storage and comparing it with the values
      entered by the user. */
      const filterdata =
        Array.isArray(userData) &&
        userData.some(
          (items: FormData) =>
            items.email === values.email &&
            decrydata(items.password) === values.password
        );

      if (filterdata) {
        const updateData =
          Array.isArray(userData) &&
          userData.map((item: FormData) => {
            if (item.email === values.email) {
              localStorage.setItem("isactive", "true");
              return {
                ...item,
                isLogin: true,
              };
            } else {
              return {
                ...item,
                isLogin: false,
              };
            }
          });
        toast.success(messages.login);
        localStorage.setItem("Users", JSON.stringify(updateData));
        navigate("/product");
      } else {
        toast.error(messages.loginerror);
      }
    },
  });

  return (
    <>
      <Form className="form m-auto " onSubmit={formik.handleSubmit}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Link to={"/"} color={"blue.400"}>
                  features
                </Link>{" "}
                ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <FormInput
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </FormControl>
                {formik.touched.email && formik.errors.email ? (
                  <p className="errors">{formik.errors.email}</p>
                ) : null}

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <FormInput
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </FormControl>
                {formik.touched.password && formik.errors.password ? (
                  <p className="errors">{formik.errors.password}</p>
                ) : null}

                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>

                  <SubmitButton
                    id="submit"
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    label={"Submit"}
                    loadingText={""}
                    size={"lg"}
                  />

                  <Stack pt={6}>
                    <Text align={"center"}>
                      Don't have account?{" "}
                      <Link to={"/signup"} color={"blue.400"}>
                        SignUp
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Form>
    </>
  );
};

export default LogIn;
