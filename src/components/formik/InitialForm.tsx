/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form } from "formik";
import { ReactNode } from "react";

interface InitialFormProps {
  initialValues: any;
  onSubmit: (values: any) => void;
  children: ReactNode;
}

const InitialForm = ({
  initialValues,
  onSubmit,
  children,
}: InitialFormProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => <Form className="space-y-4">{children}</Form>}
    </Formik>
  );
};

export default InitialForm;
