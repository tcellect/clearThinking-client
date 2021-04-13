import Form from "../Form/Form.js";
import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Grid,
} from "@material-ui/core";
import { getBiases, postBias } from "../../api/index.js";
import useStyles from "./styles.js"

export default function Home() {
	const classes = useStyles();

    const [bias, setBias] = useState({ biasText: "" });

    // TODO: move this get request to a separate component

    /*useEffect(() => {
		const biases = getBiases()
		console.log(biases)
		setBias({...bias, biasList: biases})
  	}, [bias])*/

    // TODO: clear the form after submit properly
    const handleSubmit = (e) => {
        e.preventDefault();
        postBias(bias);
        setBias({ ...bias, biasText: "" });
    };

    return (
        <Container maxWidth="lg">
            <Form setBias={setBias} bias={bias} handleSubmit={handleSubmit} />
            <Grid className={classes.test}>
                <Grid item size="xs">
                    <Typography variant="h3" align="center">
                        {bias.biasText}
                    </Typography>
                </Grid>
            </Grid>
            <Container>
                <br />
                <p>
                    People have constant inner dialogs with oneself which often
                    stay unnoticed. Logical distortions in such dialogs may lead
                    to unwanted negative emotional states. You can try to
                    indetify dialogs and biases in own thinking. To reduce
                    stress try to come up with more rational variants. Here is a
                    list of ten common biases:
                </p>
                <br />
            </Container>
        </Container>
    );
}
