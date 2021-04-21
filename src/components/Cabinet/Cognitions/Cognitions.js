import React from "react";
import { Grid } from "@material-ui/core";
import Cognition from "./Cognition/Cognition"

export default function Cognitions() {
    return (
        <Grid container md={10} spacing={3}>
            <Cognition />
            <Cognition />
            <Cognition />
            <Cognition />
            <Cognition />
            <Cognition />
        </Grid>
    );
}
