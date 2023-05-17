import React from "react";
import { useFormik } from "formik";
import './Form.css'
export default function Form() {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be les than 15 characters.";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    } else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
        values.phoneNumber
      )
    ) {
      errors.phoneNumber = "Invalid phone number";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        values.password
      )
    ) {
      errors.password =
        "Minimum eight characters, at least one uppercase letter, one number and one special character";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      request: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit} >
        <div className="formElement">
        <label htmlFor="firstName">First Name</label>
        
        <input
          type="text"
          id="firstName"
          {...formik.getFieldProps("firstName")}
        />
        {formik.errors.firstName && formik.touched.firstName ? <div>{formik.errors.firstName}</div> : null}
        <br />
        </div>
        <div className="formElement">
        <label htmlFor="lastName">Last Name</label>
        
        <input
          type="text"
          id="lastName"
          {...formik.getFieldProps("lastName")}
        />
        {formik.errors.lastName && formik.touched.lastName ? <div>{formik.errors.lastName}</div> : null}
        <br />
        </div>
        <div className="formElement">
        <label htmlFor="phoneNumber">Phone Number</label>
        
        <input
          type="tel"
          id="phoneNumber"
          {...formik.getFieldProps("phoneNumber")}
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}
        <br />
        </div>
        
        <div className="formElement">
        <label htmlFor="email">Email</label>
        
        <input
          type="email"
          id="email"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
        <br />
        </div>
        <div className="formElement">
        <label htmlFor="email">Password</label>
        
        <input
          type="password"
          id="password"
          {...formik.getFieldProps("password")}
        />
        {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
        <br />
        </div>
        <div className="formElement">
        <label htmlFor="request">
          Request<sup>(Optional)</sup>
        </label>
      
        <textarea name="request" id="request" cols="30" rows="10"></textarea>
        </div>
        
        <button className="mainButton" type="submit">Submit</button>
      </form>
    </div>
  );
}
