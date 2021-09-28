import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/form-controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelecField from "../../components/form-controls/SelectField";
import MultilineField from "../../components/form-controls/MultilineField";
import "./style.scss";
import { Button } from "@mui/material";

Practices.propTypes = {
  onsubmit: PropTypes.func,
};

function Practices(props) {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Name is required")
      .matches(/^[a-z]+$/, "Must be a character"),
    email: yup
      .string()
      .required("E-mail is required")
      .email("E-mail Address is invalid"),
    contact: yup
      .string()
      .required("Contact is required")
      .matches(/^[0-9]+$/, "Must be a number")
      .min(8, "Contact Number should consist of 8 to 12 digits only")
      .max(12, "Contact Number should consist of 8 to 12 digits only"),

    gender: yup.string().required("Gender is required"),
    notes: yup.string().required("Notes is required"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      contact: "",
      gender: "",
      notes: "",
    },
    resolver: yupResolver(schema),
  });

  const handLeSubmit = (values) => {
    const { onsubmit } = props;
    if (onsubmit) {
      onsubmit(values);
    }
  };

  return (
    <div className="form-controls">
      <form className="form-field" onSubmit={form.handleSubmit(handLeSubmit)}>
        <div className="form-list">
          <div className="form-info">
            <InputField name="fullName" label="Name*" form={form} />

            <InputField name="email" label="E-mail Address*" form={form} />
          </div>
          <div className="form-address">
            <InputField name="contact" label="Contact Number*" form={form} />

            <SelecField name="gender" label="Gender*" form={form} />
          </div>
        </div>

        <MultilineField name="notes" label="Notes*" form={form} />
        <Button fullWidth type="onsubmit">
          Save
        </Button>
      </form>
    </div>
  );
}
export default Practices;
