import React, { useEffect } from "react";
import { useFormik } from "formik";
// import "./Form.css";
export default function Form2({updateProgress, updateData}) {
  const date = new Date();
  const today = `${date.getUTCFullYear()}-${
    (date.getUTCMonth() + 1).toString().length < 2
      ? `0${date.getUTCMonth() + 1}`
      : date.getUTCMonth() + 1
  }-${
    date.getUTCDate().toString().length < 2
      ? `0${date.getUTCDate()}`
      : date.getUTCDate()
  }`;
  const errors = {};
  const validate = (values) => {
    // const errors = {};

    if (!values.cardNumber) {
      errors.cardNumber = "Required";
    } else if (!/^\d+$/.test(values.cardNumber)) {
      errors.cardNumber = "Enter a valid card Number";
    }
    if (!values.cardName) {
      errors.cardName = "Required";
    } else if (values.cardName.length > 20) {
      errors.cardName = "Must be less than 20 characters.";
    }

    if (!values.expiryDate) {
      errors.expiryDate = "Required";
    }

    if (!values.cvv) {
      errors.cvv = "Required";
    } else if (values.cvv.length !== 3 || !/^\d+$/.test(values.cvv)) {
      errors.cvv = "Enter a valid CVV";
    }

    return errors;
  };

  const valid = () => {
    if(formik.values.cardNumber && formik.values.cardName && formik.values.expiryDate && formik.values.cvv && (Object.keys(errors).length === 0)){
        return false;
    }
    return true;
  }

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      updateData(values);
      formik.resetForm();
      updateProgress(3);
      updateData(values);
    },
  });
  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <div className="formElement">
          <label htmlFor="cardName">Card Name</label>

          <input
            type="text"
            id="cardName"
            {...formik.getFieldProps("cardName")}
          />
          {formik.errors.cardName && formik.touched.cardName ? (
            <div>{formik.errors.cardName}</div>
          ) : null}
          <br />
        </div>
        <div className="formElement">
          <label htmlFor="cardNumber">Card Number</label>

          <input
            type="text"
            id="cardNumber"
            {...formik.getFieldProps("cardNumber")}
          />
          {formik.errors.cardNumber && formik.touched.cardNumber ? (
            <div>{formik.errors.cardNumber}</div>
          ) : null}
          <br />
        </div>
        <div className="formElement">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="date"
            id="expiryDate"
            min={today}
            value={formik.values.expiryDate}
            name = "expiryDate"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.expiryDate && formik.touched.expiryDate ? (
            <div>{formik.errors.cardNumber}</div>
          ) : null}
          <br />
        </div>
            <div className="formElement">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id = "cvv" {...formik.getFieldProps("cvv")}/>
                {formik.errors.cvv && formik.touched.cvv ? (<div>{formik.errors.cvv}</div>) : null}
                <br />
            </div>
        <button
          className="mainButton"
          type="submit"
          disabled={valid()}
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
