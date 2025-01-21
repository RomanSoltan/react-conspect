import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./FeedbackForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too Short!")
    .max(256, "Too long")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        handleSubmit;
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={s.field}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage className={s.error} name="username" component="span" />
        </div>

        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={s.field}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={s.error} name="email" component="span" />
        </div>

        <div>
          <label htmlFor={msgFieldId}>Message</label>
          <Field
            className={s.field}
            as="textarea"
            name="message"
            id={msgFieldId}
            rows="5"
          />
          <ErrorMessage className={s.error} name="message" component="span" />
        </div>

        <div>
          <label htmlFor={levelFieldId}>Service satisfaction level</label>
          <Field className={s.field} as="select" name="level" id={levelFieldId}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage className={s.error} name="level" component="span" />
        </div>

        <button className={s.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
