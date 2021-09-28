import React from "react";
import PropTypes from "prop-types";
import { InputLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Controller } from "react-hook-form";

MultilineField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function MultilineField(props) {
  const { form, name, label, disable } = props;
  const { errors } = form;
  const hasErrors = errors[name];

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "fullwith" },
      }}
    >
      <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
      <Controller
        margin="normal"
        name={name}
        control={form.control}
        as={TextField}
        multiline
        fullWidth
        rows={7}
        disable={disable}
        error={!!hasErrors}
        helperText={errors[name]?.message}
      />
    </Box>
  );
}

export default MultilineField;
