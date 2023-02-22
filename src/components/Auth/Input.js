import React from "react";
// import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Input = ({
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
  half,
}) => {
  return (
    <main item xs={12} sm={half ? 6 : 12}>
      <textarea
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password" || name === "confirmPassword"
            ? {
                endAdornment: (
                  <button onClick={handleShowPassword}>
                    {type === "password" ? <div> i </div> : <div> e</div>}
                  </button>
                ),
              }
            : null
        }
      />
    </main>
  );
};

export default Input;
