import { Button, Typography } from "@mui/material";
import { height } from "@mui/system";
import React, { useState } from "react";
import Practices from "../Practices";
import "./style.scss";
Form.propTypes = {};

const MODE = {
  SAVE: "save",
  EDIT: "edit",
};

function Form(props) {
  const [mode, setMode] = useState(MODE.SAVE);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [gender, setGender] = useState();
  const [notes, setNotes] = useState();

  const handleFormSubmit = (values) => {
    if (typeof values === "object") {
      MODE.SAVE = values;
      setMode(MODE.EDIT);
    }

    setName(values.fullName);
    setEmail(values.email);
    setContact(values.contact);
    setGender(values.gender);
    setNotes(values.notes);
  };

  return (
    <div>
      {mode === MODE.SAVE && (
        <>
          <Practices onsubmit={handleFormSubmit} />
        </>
      )}

      <div className="edit-mode">
        {mode === MODE.EDIT && (
          <>
            <div className="info-mode-list">
              <Typography> Name*</Typography>

              <div className="name-mode">
                <span className="name"></span>
                <Typography>{name && name}</Typography>
                <div className="email-lable">
                  <Typography>
                    <Typography className="lable2"> E-mail Address*</Typography>
                    <span className="email name"></span>
                    {email && email}
                  </Typography>
                </div>
              </div>
              <div className="info-mode">
                <Typography>
                  <Typography className="lable3 lable2">
                    Contact Number*
                  </Typography>
                  <span className="contact name"></span>
                  {contact && contact}
                </Typography>
                <div className="email-lable">
                  <Typography>
                    <Typography className="lable4 lable2">Gender*</Typography>
                    <span className="gender name contact"></span>
                    {gender && gender}
                  </Typography>
                </div>
              </div>
              <Typography className="notes-mode">
                <Typography className="label5">Notes*</Typography>

                <span className="notes"></span>
                {notes && notes}
              </Typography>
            </div>

            <Button
              className="btn-switch-mode"
              fullWidth
              onClick={() => setMode(MODE.SAVE)}
            >
              Edit
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Form;
