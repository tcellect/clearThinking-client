import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Grid,
} from "@material-ui/core";
import { getTickets, postTicket } from "../../api/index.js";
import useStyles from "./styles.js"


// TODO: remove bias checking from here
// TODO: make this component provide general information about the project, methodology and app
export default function Home() {
	const classes = useStyles();

    const [tickets, setTickets] = useState({ ticketsText: "" });

    // TODO: move this get request to a separate component
    // TODO: clear the form after submit properly
    const handleSubmit = (e) => {
        e.preventDefault();
        postTicket(tickets);
        setTickets({ ...tickets, ticketsText: "" });
    };

    return (
        <Container maxWidth="lg">
            <Grid className={classes.test}>
                <Grid item size="xs">
                    <Typography variant="h3" align="center">
                        {tickets.ticketsText}
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
