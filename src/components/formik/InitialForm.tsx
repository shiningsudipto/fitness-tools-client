import { Formik, Form } from "formik";

const InitialForm = ({ initialValues, onSubmit, children }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, setFieldValue }) => (
        <Form className="space-y-4">{children}</Form>
      )}
    </Formik>
  );
};

export default InitialForm;
