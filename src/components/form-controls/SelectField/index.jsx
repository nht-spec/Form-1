import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

SelecField.prototype = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Others",
    label: "Others",
  },
  {
    value: "I do not wish to say",
    label: "I do not wish to say",
  },
];

function SelecField(props) {
  const { form, name, label, disable } = props;
  const { errors } = form;
  const hasErrors = errors[name];

  const [gender, setGerder] = React.useState();
  const handleChange = (event) => {
    setGerder(event.target.value);
  };

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
        select
        value={gender}
        onChange={handleChange}
        helperText={errors[name]?.message}
      >
        {genders.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Controller>
    </Box>
  );
}

export default SelecField;
