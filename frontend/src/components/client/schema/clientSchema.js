import * as Yup from "yup";

const phoneNumberRules = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
const emailRules = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;

export const clientSchema=Yup.object().shape({
    name:Yup.string().required("Name Not be Empty"),
    email: Yup.string().email("Invalid Email!")
      .matches(emailRules, { message: " Not valid :{" })
      .required("Email Required !"),
      phone: Yup.string()
      .matches(phoneNumberRules, { message: "Invalid Phone Number!" })
      .required("Phone Number Required !"),
})