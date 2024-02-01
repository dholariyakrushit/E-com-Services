import * as Yup from "yup";

import { yupRequire } from "../../constants/messages";

// signUp
export const signUpSchema = Yup.object({
  firstname: Yup.string().min(2).max(20).required(yupRequire.firstname),
  lastname: Yup.string().min(2).max(20).required(yupRequire.lastname),
  contact: Yup.number().min(6).required(yupRequire.contact),
  email: Yup.string().email().required(yupRequire.email),
  password: Yup.string().min(6).required(yupRequire.password),
  confirm_password: Yup.string()
    .required(yupRequire.confirm_password)
    .oneOf([Yup.ref("password"), " "], yupRequire.password_match),
});

//logIn
export const logInSchema = Yup.object({
  email: Yup.string().email().required(yupRequire.email),
  password: Yup.string().min(6).required(yupRequire.password),
});

//update password
export const updatePassSchema = Yup.object({
  password: Yup.string().min(6).required(yupRequire.password),
  new_password: Yup.string()
    .min(6, yupRequire.newpassword_min)
    .required(yupRequire.newpassword),
  confirm_password: Yup.string()
    .required(yupRequire.confirmpassword)
    .oneOf([Yup.ref("new_password"), " "], yupRequire.password_match),
});

// edite profile
export const editeSchema = Yup.object({
  firstname: Yup.string().min(2).max(20).required(yupRequire.firstname),
  lastname: Yup.string().min(2).max(20).required(yupRequire.lastname),
  contact: Yup.number().min(6).required(yupRequire.contact),
  email: Yup.string().email().required(yupRequire.email),
});
