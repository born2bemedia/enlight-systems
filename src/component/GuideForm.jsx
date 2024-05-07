"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import Link from "next/link";
import axios from "axios";

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("This field is required."),
});

const handleSubmit = async (
  values,
  { setSubmitting, resetForm, setStatus }
) => {
  try {
    const response = await fetch("/api/guide", {
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

function GuideForm({ handleFormReset, popupTitleContent = "", subtitle }) {
  return (
    <div className="guide">
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          handleSubmit(values, { setSubmitting, resetForm, setStatus });
          setTimeout(() => {
            handleFormReset(true);
          }, 400);
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
            <h2>
              We're working on a comprehensive guide to help you <br />
              navigate our system and dashboard effectively.
            </h2>

            <p className="subtitle">
              Leave your email below, and we'll notify you when <br />
              the guide is available. You'll receive a link directly to your
              inbox.
            </p>

            <Form className="popup-form ">

              <div className="input-wrap">
                <Field
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className={touched.email && errors.email ? "invalid" : ""}
                />
                <ErrorMessage name="email" component="span" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                <span className="main-button">
                  <span>
                  Get the guide
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
          </>
        )}
      </Formik>
    </div>
  );
}

export default GuideForm;
