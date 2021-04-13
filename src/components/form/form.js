import React from "react";
import { AppBar, InputBase, Button, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


// TODO: find out why formatting makes 2 spaces
export default function Form({ setBias, handleSubmit, bias }) {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Grid>
                <InputBase
                    id="base-input"
                    placeholder={"your sentence"}
                    onChange={(e) =>
                        setBias({
                            ...bias,
                            biasText: e.target.value,
                        })
                    }
                    endAdornment={
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disableElevation
                            startIcon={<SearchIcon />}
                        >
                            find
                        </Button>
                    }
                ></InputBase>
            </Grid>
        </form>
    );
}
