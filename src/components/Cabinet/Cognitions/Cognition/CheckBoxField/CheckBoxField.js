import React from "react";
import { Checkbox, TextField, FormControlLabel } from "@material-ui/core";

export default function CheckBoxField({ label, name, handleBoxChange }) {
    const localHandler = (e) => {
        console.log("fired",e.target.checked)
    }
    return (
        <FormControlLabel
            label={label}
            control={<Checkbox name={name} onChange={handleBoxChange}/>
            }
        />
    );
}
