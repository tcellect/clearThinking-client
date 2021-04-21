import React from "react";
import { Grid, TextField } from "@material-ui/core";

export default function InputField({
    handleChange,
    name,
    half,
    label,
    autofocus,
    type,
    placeholder,
    value, 
    handleShowPassword,
}) {
    return (
        <Grid item xs={12}>
            <TextField
                name={name}
                multiline
                rows={3}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                label={label}
                autoFocus={autofocus}
                type={type}
            />
        </Grid>
    );
}
