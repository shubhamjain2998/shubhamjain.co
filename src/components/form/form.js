import React, { useState } from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import * as emailjs from "emailjs-com"

import classes from "./form.module.css"

const messageSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid Email!")
    .required("Required"),
  message: Yup.string().required("Required"),
})

const MessageForm = () => {
  const onSubmitHandler = values => {
    console.log(values)
    let templateParams = {
      to_name: "jains1801@gmail.com",
      from_name: values.name,
      //   subject: name + " Feedback From Portfolio Site",
      message_html: values.message,
    }

    emailjs
      .send(
        "gmail",
        "template_8g8QGoCm",
        templateParams,
        "user_1Sw6bvvnE0GzJw9NBmWqr"
      )
      .then(
        result => {
          alert("Your Message has been sent Successfully.")
        },
        error => {
        //   console.log(error.text)
          alert("Something Went Wrong. Please try again later")
        }
      )
    //   .catch(error => console.log(error))
  }

  return (
    <div className={classes.container}>
      <div>
        <h3>Wanna Send Me A Message ?</h3>
      </div>
      <div className={classes.formDiv}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={messageSchema}
          onSubmit={values => {
            onSubmitHandler(values)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="name"
                placeholder="Your Name"
                className={classes.fieldStyle}
              />
              {errors.name && touched.name ? (
                <div className={classes.errorDiv}>{errors.name}</div>
              ) : null}
              <Field
                name="email"
                placeholder="Your Email"
                className={classes.fieldStyle}
              />
              {errors.email && touched.email ? (
                <div className={classes.errorDiv}>{errors.email}</div>
              ) : null}
              <div className={classes.textArea}>
                <Field
                  name="message"
                  component="textarea"
                  placeholder="Your Message"
                />
                {errors.message && touched.message ? (
                  <div className={classes.errorDiv}>{errors.message}</div>
                ) : null}
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default MessageForm
