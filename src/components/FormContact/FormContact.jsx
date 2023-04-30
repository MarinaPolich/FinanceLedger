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

export const FormContact = () => {
  const handleSubmit = (values) => {
    const formData = new FormData();

    for (const key of Object.keys(values)) {
      formData.append(key, values[key]);
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => (window.location.pathname = "/thank-you/")) //navigate("/thank-you/"))
      .catch((error) => alert(error));
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
        <FormBox name="contact" data-netlify="true">
          <TitleForm>Request Callback</TitleForm>
          <InputForm
            type="name"
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
