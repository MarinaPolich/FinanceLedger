import { Formik } from "formik";
import {
  ErrorBox,
  FormBox,
  InputForm,
  TextError,
  TitleForm,
} from "./FormContact.styled";
import { ButtonSolid } from "../Button/Button";
import * as Yup from "yup";
import { ReactSVG } from "react-svg";
import { worning } from "../../assets/icon";

const contactSchema = Yup.object().shape({
  email: Yup.string().required("This is a required field"),
});

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const FormContact = () => {
  const handleSubmit = (values, { resetForm }) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => {
        alert("Thank you! Your form submission has been received.");
        resetForm();
      })
      .catch((error) => alert("Error: Please try again!"));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values, errors, touched }) => (
        <FormBox
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <TitleForm>Request Callback</TitleForm>
          <InputForm
            type="text"
            name="name"
            autoComplete="username"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && touched.name ? (
            <ErrorBox>
              <ReactSVG
                src={worning}
                afterInjection={(svg) => {
                  svg.setAttribute("height", "16");
                }}
                className="error-icon"
                wrapper="div"
              />
              <TextError>{errors.name}</TextError>
            </ErrorBox>
          ) : null}
          <InputForm
            type="email"
            name="email"
            autoComplete="username"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter email*"
          />
          {errors.email && touched.email ? (
            <ErrorBox>
              <ReactSVG
                src={worning}
                afterInjection={(svg) => {
                  svg.setAttribute("height", "15");
                }}
                className="error-icon"
                wrapper="div"
              />
              <TextError>{errors.email}</TextError>
            </ErrorBox>
          ) : null}
          <ButtonSolid type="submit">send</ButtonSolid>
        </FormBox>
      )}
    </Formik>
  );
};
