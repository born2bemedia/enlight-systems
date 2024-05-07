"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";

const ValidationSchema = Yup.object().shape({
  password: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("This field is required."),
});

const handleSubmit = async (
  values,
  { setSubmitting, resetForm, setStatus }
) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log(JSON.stringify(values));
    if (response.ok) {
      resetForm();
      setStatus({ success: true });
      setSubmitting(false);
    } else {
      setStatus({ success: false });
    }
  } catch (error) {
    console.error(error);
  }
};

const LoginForm = () => (
  <div>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
        handleSubmit(values, { setSubmitting, resetForm, setStatus });
      }}
    >
      {({
        setFieldValue,
        touched,
        errors,
        isSubmitting,
        values,
        setFieldTouched,
      }) => (
        <>
          <h2>Welcome to Enlight!</h2>
          <p>Your go-to platform for managing your crypto marketing tasks!</p>
          <Form className="login-form">
            <div className="input-wrap">
              <Field
                name="email"
                type="email"
                placeholder="Your email"
                className={touched.email && errors.email ? "invalid" : ""}
              />
              <ErrorMessage name="email" component="span" />
            </div>

            <div className="input-wrap">
              <Field
                name="password"
                type="password"
                placeholder="Your password"
                className={touched.password && errors.password ? "invalid" : ""}
              />
              <ErrorMessage name="password" component="span" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              <span className="main-button">
                <span>
                  Continue
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.636 15.6699L20.352 10.5199C21.852 6.02194 22.602 3.77294 21.414 2.58594C20.227 1.39894 17.978 2.14794 13.479 3.64794L8.32997 5.36394C4.69997 6.57394 2.88497 7.17994 2.36997 8.06694C2.12908 8.48152 2.0022 8.95246 2.0022 9.43194C2.0022 9.91142 2.12908 10.3824 2.36997 10.7969C2.88497 11.6849 4.69997 12.2899 8.32997 13.5009C8.77997 13.6509 9.28697 13.5429 9.62397 13.2099L15.13 7.75494C15.2023 7.67634 15.2899 7.61324 15.3874 7.56945C15.4848 7.52566 15.5901 7.5021 15.697 7.50019C15.8038 7.49827 15.9099 7.51805 16.0089 7.55831C16.1078 7.59858 16.1976 7.6585 16.2727 7.73446C16.3479 7.81041 16.4068 7.90082 16.446 8.00021C16.4852 8.0996 16.5039 8.20591 16.5008 8.31271C16.4977 8.41951 16.473 8.52457 16.4282 8.62156C16.3834 8.71854 16.3193 8.80542 16.24 8.87694L10.824 14.2429C10.6433 14.4276 10.5174 14.6587 10.4602 14.9106C10.403 15.1625 10.4168 15.4254 10.5 15.6699C11.71 19.2999 12.316 21.1159 13.203 21.6319C13.6178 21.8727 14.0889 21.9995 14.5685 21.9995C15.0481 21.9995 15.5192 21.8727 15.934 21.6319C16.821 21.1159 17.425 19.3009 18.636 15.6699Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </Form>
          <p>
            By proceeding, you agree to the{" "}
            <Link href="/terms-of-service">Terms of Service</Link> and<br/>
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
          <div className="forgot">
            <Link href="#">
              Forgot password?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.5403 5.46995C13.6809 5.3295 13.8716 5.25061 14.0703 5.25061C14.2691 5.25061 14.4597 5.3295 14.6003 5.46995L20.6003 11.47C20.7408 11.6106 20.8197 11.8012 20.8197 12C20.8197 12.1987 20.7408 12.3893 20.6003 12.53L14.6003 18.53C14.5317 18.6036 14.4488 18.6627 14.3569 18.7037C14.2649 18.7447 14.1655 18.7668 14.0648 18.7685C13.9641 18.7703 13.8641 18.7518 13.7707 18.7141C13.6773 18.6764 13.5925 18.6202 13.5213 18.549C13.4501 18.4778 13.3939 18.3929 13.3562 18.2995C13.3185 18.2062 13.2999 18.1061 13.3017 18.0054C13.3035 17.9047 13.3255 17.8054 13.3665 17.7134C13.4075 17.6214 13.4666 17.5386 13.5403 17.4699L18.2603 12.75H4.07031C3.8714 12.75 3.68063 12.6709 3.53998 12.5303C3.39933 12.3896 3.32031 12.1989 3.32031 12C3.32031 11.801 3.39933 11.6103 3.53998 11.4696C3.68063 11.329 3.8714 11.25 4.07031 11.25H18.2603L13.5403 6.52995C13.3999 6.38933 13.321 6.1987 13.321 5.99995C13.321 5.8012 13.3999 5.61058 13.5403 5.46995Z"
                  fill="#333CEF"
                />
              </svg>
            </Link>
          </div>
        </>
      )}
    </Formik>
  </div>
);

export default LoginForm;
