import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Form from "react-bootstrap/Form";

import { updatePassSchema } from "../../validation/schemas";
import Header from "../header/Header";
import { decrydata, encrypass } from "../../utils/utils";
import { messages } from "../../constants/messages";
import SubmitButton from "../common/SubmitButton";
import FormInput from "../common/FormInput";
import { Iform } from "../../types";

interface ForgateType {
  password: string;
  new_password: string;
  confirm_password: string;
}

const initialValues: ForgateType = {
  password: "",
  new_password: "",
  confirm_password: "",
};

const ForgatePass: React.FC = () => {
  const handleSubmit = (values: { password: string; new_password: string }) => {
    /* A template literal. It allows you to write multi-line strings and string interpolation (i.e.
      inject variables in a string). */
    let userData = localStorage.getItem("Users");
    userData = userData ? JSON.parse(userData) : [];

    const userPass =
      Array.isArray(userData) &&
      userData.find((item: Iform) => item.isLogin === true);

    /* Updating the password of the user who is logged in. */
    const newUser =
      Array.isArray(userData) &&
      userData.map((item: Iform) => {
        if (item.isLogin === true) {
          if (decrydata(userPass.password) === values.password) {
            if (values.password !== values.new_password) {
              toast.success(messages.passwordUpdate);
              return {
                ...item,
                password: encrypass(values.new_password),
              };
            } else {
              toast.error(messages.passwordUnique);
            }
          } else {
            toast.error(messages.passwordInvalid);
          }
        } else {
          return item;
        }
        return item;
      });

    localStorage.setItem("Users", JSON.stringify(newUser));
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: updatePassSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Header />
      <Form className="form m-auto " onSubmit={formik.handleSubmit}>
        <Flex
          minH={"93vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Update password
            </Heading>

            <FormControl id="password">
              <FormLabel>Current Password</FormLabel>
              <FormInput
                id="password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Current Password"
              />
            </FormControl>
            {formik.touched.password && formik.errors.password ? (
              <p className="errors">{formik.errors.password}</p>
            ) : null}

            <FormControl id="new_password">
              <FormLabel>New Password</FormLabel>
              <FormInput
                id="new_password"
                type="password"
                name="new_password"
                value={formik.values.new_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="New Password"
              />
            </FormControl>
            {formik.touched.new_password && formik.errors.new_password ? (
              <p className="errors">{formik.errors.new_password}</p>
            ) : null}

            <FormControl id="confirm_password">
              <FormLabel>Confirm Password</FormLabel>
              <FormInput
                id="confirm_password"
                type="password"
                name="confirm_password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Confirm Password"
              />
            </FormControl>
            {formik.touched.confirm_password &&
            formik.errors.confirm_password ? (
              <p className="errors">{formik.errors.confirm_password}</p>
            ) : null}
            <Stack spacing={6}>
              <SubmitButton
                type="submit"
                bg={"blue.400"}
                color={"white"}
                label={"Submit"}
                loadingText={""}
                id={undefined}
                size={"lg"}
              />
            </Stack>
          </Stack>
        </Flex>
      </Form>
    </>
  );
};

export default ForgatePass;
