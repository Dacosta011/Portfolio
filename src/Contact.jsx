import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import contactStyles from "./styles/Contact.module.scss";

function Contact() {
  const validateSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
    <section className={contactStyles.contactContainer} id="contactSection">
      <h1>Contact</h1>
      <Formik
        validationSchema={validateSchema}
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={contactStyles.formContainer}>
              <div className={contactStyles.emailName}>
                <div className={contactStyles.input}>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className={contactStyles.input_field}
                    required
                  />
                  <label className={contactStyles.input_label} htmlFor="name">
                    Full name
                  </label>
                </div>
                <div className={contactStyles.input}>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={contactStyles.input_field}
                    required
                  />
                  <label className={contactStyles.input_label} htmlFor="email">
                    Email
                  </label>
                </div>
              </div>
              <div className={contactStyles.input}>
                <input
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  className={contactStyles.input_field}
                  required
                />
                <label className={contactStyles.input_label} htmlFor="message">
                  Message
                </label>
              </div>
              <div className={contactStyles.action}>
                <button className={contactStyles.action_button} type="submit">
                  Get started
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
}

export default Contact;
