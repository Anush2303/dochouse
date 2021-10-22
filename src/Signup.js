import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Signup.css";

const Signup = () => (
  <div className="form">
    <h1>SignUp</h1>

    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        password: Yup.string().required("Required"),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit} className="form-container">
            <label htmlFor="name" style={{ display: "block" }}>
              Name
            </label>
            <input
              id="name"
              placeholder="Enter your name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name ? "text-input error" : "text-input"
              }
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="password" style={{ display: "block" }}>
              Password
            </label>
            <input
              id="password"
              placeholder="Enter your Password"
              type="text"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}
            <label htmlFor="confirm-password" style={{ display: "block" }}>
              Confirm Password
            </label>
            <input
              id="name"
              placeholder="Confirm your Password"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name ? "text-input error" : "text-input"
              }
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}
            <button type="submit" disabled={isSubmitting} className="submit">
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default Signup;
