/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, FormikProps } from "formik";
import React, { ReactNode } from "react";

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
      {({ values, setFieldValue }: FormikProps<any>) => (
        <Form className="space-y-4">{children}</Form>
      )}
    </Formik>
  );
};

export default InitialForm;
