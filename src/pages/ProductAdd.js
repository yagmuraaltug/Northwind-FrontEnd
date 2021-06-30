import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodlamaioTextInput from "../utilities/KodlamaioTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  const schema = Yup.object({
    productName: Yup.string().required("Urun adi zorunludur."),
    unitPrice: Yup.number().required("Urun Fiyati zorunludur."),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <KodlamaioTextInput
          name="productName"
          placeholder="Product Name"
        ></KodlamaioTextInput>
        <KodlamaioTextInput
          name="unitPrice"
          placeholder="Unit Price"
        ></KodlamaioTextInput>

        <Button color="green" type="submit">
          Add
        </Button>
      </Form>
    </Formik>
  );
}
