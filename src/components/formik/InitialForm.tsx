import { Formik, Form } from "formik";

const InitialForm = ({ initialValues, onSubmit, children }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, setFieldValue }) => (
        <Form className="space-y-4">
          {children}
          <button type="submit" className="primary-btn w-full">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default InitialForm;
