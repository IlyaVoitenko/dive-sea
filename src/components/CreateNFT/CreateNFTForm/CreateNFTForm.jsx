import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const CreateNFTForm = () => {
  const handlePartOneChange = (e, setFieldValue) => {
    const value = e.value.replace(/\D/g, "");
    let newValue = value;
    if (newValue.length <= 3) {
      setFieldValue("part1", newValue);
      if (value.length === 3) document.getElementById("part2").focus();
    }
  };

  const handlePartTwoChange = (target, setFieldValue) => {
    let value = target.value.replace(/\D/g, "");
    if (value.length <= 3) setFieldValue("part2", value);
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        part1: "",
        part2: "",
      }}
      validationSchema={Yup.object({
        part1: Yup.string()
          .matches(/^\d{3}$/, "Must be exactly 3 digits")
          .required("Required"),
        part2: Yup.string()
          .matches(/^\d{3}$/, "Must be exactly 3 digits")
          .required("Required"),
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="flex justify-center items-center desktop:w-[131px] desktop:h-[63px] desktop:rounded-[12.33px] bg-[#EFEFEF]  text-[#9596A6]">
            <span>Ex - </span>
            <Field
              type="text"
              name="part1"
              placeholder="000"
              onChange={({ target }) =>
                handlePartOneChange(target, setFieldValue, values)
              }
              className="w-[25%] text-center border-none focus:outline-none bg-[#EFEFEF]"
            />
            <span> x </span>
            <Field
              id="part2"
              type="text"
              name="part2"
              placeholder="000"
              onChange={({ target }) =>
                handlePartTwoChange(target, setFieldValue, values)
              }
              maxLength={3}
              className="w-[25%] text-center  border-none hover:border-none focus:outline-none bg-[#EFEFEF]"
            />
          </div>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateNFTForm;
