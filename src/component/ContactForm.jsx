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
  assistance: Yup.string().required("This field is required."),
  problem: Yup.string().required("This field is required."),
  name: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("This field is required."),

  phone: Yup.string()
    .required("This field is required.")
    .test("is-valid-phone", "Please provide a valid phone number.", (value) => {
      // Implement a more robust check for phone numbers here if necessary
      return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
        value
      );
    }),
  reply: Yup.string().email("Please provide a valid email address."),
});

const assistanceOptions = [
  { value: "Dashboard Setup Assistance", label: "Dashboard Setup Assistance" },
  { value: "Module Customization Help", label: "Module Customization Help" },
  {
    value: "Account Access and Permissions",
    label: "Account Access and Permissions",
  },
  { value: "Data Integration Support", label: "Data Integration Support" },
  {
    value: "Dashboard Performance Optimization",
    label: "Dashboard Performance Optimization",
  },
  {
    value: "Real-time Analytics Training",
    label: "Real-time Analytics Training",
  },
  {
    value: "Marketing Strategy Consultation",
    label: "Marketing Strategy Consultation",
  },
  { value: "Other", label: "Other" },
];

const handleSubmit = async (
  values,
  { setSubmitting, resetForm, setStatus }
) => {
  let fileData = null;

  // Check if there's a file and read it as base64
  if (values.file) {
    fileData = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64EncodedData = reader.result;
        resolve({
          base64: base64EncodedData.split(";base64,").pop(), // Get only the base64 part
          filename: values.file.name, // Get the filename
          mimetype: values.file.type, // Get the MIME type
        });
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(values.file);
    });
  }

  const payload = {
    ...values,
    file: fileData,
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log(JSON.stringify(payload));
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

function ContactForm({ handleFormReset, popupTitleContent = "", subtitle }) {
  const [country, setCountry] = useState("gb");

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        const countryCode = response.data.country_calling_code.replace("+", "");
        setCountry(countryCode.toLowerCase());
      })
      .catch((error) => {
        console.error("Error fetching IP data", error);
      });
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          assistance: "Dashboard Setup Assistance",
          problem: "",
          name: "",
          email: "",
          phone: "",
          reply: "",
          file: null,
          messanger: false,
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
          handleChange,
        }) => (
          <>
            <Form className="contact-form">
              <div className="form-block">
                <label>I need assistance with:</label>
                <div className="input-wrap">
                  <Select
                    options={assistanceOptions}
                    classNamePrefix={
                      touched.assistance && errors.assistance
                        ? "invalid select"
                        : "select"
                    }
                    onChange={(option) =>
                      setFieldValue("assistance", option.value)
                    }
                    onBlur={() => setFieldTouched("assistance", true)}
                    value={assistanceOptions.find(
                      (option) => option.value === values.assistance
                    )}
                  />
                  <ErrorMessage name="assistance" component="span" />
                </div>
              </div>

              <div className="form-block">
                <label>Tell us about your problem with the dashboard:</label>
                <div className="input-wrap">
                  <Field
                    name="problem"
                    className={
                      touched.problem && errors.problem ? "invalid" : ""
                    }
                  />
                  <ErrorMessage name="problem" component="span" />
                </div>
              </div>

              <div className="form-block">
                <label>How should we address you?</label>
                <div className="input-wrap">
                  <Field
                    name="name"
                    className={touched.name && errors.name ? "invalid" : ""}
                  />
                  <ErrorMessage name="name" component="span" />
                </div>
              </div>

              <div className="form-block">
                <label>How can we contact you?</label>
                <div className="input-wrap">
                  <Field
                    name="email"
                    type="email"
                    className={touched.email && errors.email ? "invalid" : ""}
                  />
                  <ErrorMessage name="email" component="span" />
                </div>
                <div className="input-wrap">
                  <PhoneInput
                    country={country}
                    value=""
                    onChange={(value) => setFieldValue("phone", value)}
                    placeholder="Your phone"
                    className={touched.phone && errors.phone ? "invalid" : ""}
                  />
                  <ErrorMessage name="phone" component="span" />
                </div>
                <div
                  className="acceptance-wrap"
                  onClick={() => {
                    setFieldValue("messanger", !values.messanger);
                  }}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="16"
                      height="16"
                      transform="translate(0.5)"
                      fill="#2A2A2A"
                      fill-opacity="0.1"
                    />
                    {values.messanger && (
                      <rect x="4.5" y="4" width="8" height="8" fill="#97D80F" />
                    )}
                  </svg>
                  <span>
                    Messenger{" "}
                    <span>(Check this box if it is your messenger)</span>
                  </span>
                  <input
                    name="messanger"
                    type="checkbox"
                    checked={values.messanger}
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                </div>
              </div>

              <div className="form-block">
                <label>
                  Is there anybody we should send a copy of <br />
                  our reply to?
                </label>
                <div className="input-wrap">
                  <Field
                    name="reply"
                    className={touched.reply && errors.reply ? "invalid" : ""}
                  />
                  <ErrorMessage name="reply" component="span" />
                </div>
              </div>

              <div className="form-block">
                <label>Upload a screenshot of a problem you experience:</label>
                <div className="input-wrap file-wrap">
                  <span
                    className="upload-custom"
                    onClick={() =>
                      document.getElementById("file-upload").click()
                    }
                  >
                    Upload{" "}
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
                        d="M12.5 2H6.5C5.70435 2 4.94129 2.31607 4.37868 2.87868C3.81607 3.44129 3.5 4.20435 3.5 5V19C3.5 19.7956 3.81607 20.5587 4.37868 21.1213C4.94129 21.6839 5.70435 22 6.5 22H18.5C19.2956 22 20.0587 21.6839 20.6213 21.1213C21.1839 20.5587 21.5 19.7956 21.5 19V11H15.5C14.7044 11 13.9413 10.6839 13.3787 10.1213C12.8161 9.55871 12.5 8.79565 12.5 8V2ZM21.5 9V8.828C21.4996 8.03276 21.1834 7.27023 20.621 6.708L16.793 2.878C16.2304 2.31572 15.4674 1.9999 14.672 2H14.5V8C14.5 8.26522 14.6054 8.51957 14.7929 8.70711C14.9804 8.89464 15.2348 9 15.5 9H21.5Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </span>
                  <span className="fileName">
                    {values.file ? values.file.name : ""}
                  </span>
                  <input
                    id="file-upload"
                    name="file"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                    style={{ display: "none" }}
                  />
                  <ErrorMessage name="file" component="span" />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting}>
                <span className="main-button">
                  <span>
                    Send quick request
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

export default ContactForm;
