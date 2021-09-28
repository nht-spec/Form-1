import React from "react";
import { InputLabel, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { Box } from "@mui/system";

InputField.prototype = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  const { errors } = form;
  const hasErrors = errors[name];

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "41.5ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
      <Controller
        margin="normal"
        name={name}
        control={form.control}
        as={TextField}
        disable={disable}
        error={!!hasErrors}
        helperText={errors[name]?.message}
      />
    </Box>
  );
}

export default InputField;
