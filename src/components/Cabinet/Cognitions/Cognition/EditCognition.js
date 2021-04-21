import React, { useState } from "react";
import {
    Grid,
    FormGroup,
    FormControl,
    FormLabel,
    Container,
    Button,
} from "@material-ui/core";
import CheckBoxField from "./CheckBoxField/CheckBoxField";
import InputField from "./InputField/InputField";
import { postTicket} from "../../../../api/index.js"

const sample = {
    ticketId: "",
    userId: "",
    situation: "",
    feelings: {
        anger: false,
        fear: false,
        shame: false,
        surprise: false,
        disgust: false,
        happiness: false,
    },
    intensityOfFeelingsIn: 0,
    behaviour: "",
    thought: "",
    biases: {
        allOrNothing: false,
        overgeneralization: false,
        mentalFilter: false,
        disqualifyingThePositive: false,
        jumpingToConclusion: false,
        magnification: false,
        emotionalReasoning: false,
        shouldStatement: false,
        labeling: false,
        personalization: false,
    },
    balancedThought: "",
    intensityOfFeelingsOut: 0,
};

// TODO: perhaps rendering it in cabinet would make better UX
export default function EditCognition() {
    const [ticket, setTicket] = useState(sample);
    const [biases, setBiases] = useState(sample.biases);
    const [feelings, setFeelings] = useState(sample.feelings);

    // TODO: fix unsynchronized form and react states. Check out useEffect
    // TODO: orginize eventHandlers logic. Check out useReducer or redux
    const handleChange = (e) => {
        console.log("state", ticket);
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };
    const handleBoxChange = (e) => {
        console.log("clicked", e.target.checked, e.target.name);
        setFeelings({ ...feelings, [e.target.name]: e.target.checked });
    };
    const handleDelete = (e) => {
        alert("deleted");
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        postTicket(ticket)
        console.log(e.target.name);
        // TODO: target is form. Find a way to know what button triggered the event
        if (e.target.name === "add") {
            alert("submited");
        } else if (e.target.name === "delete") {
            alert("deleted");
        }
    };
    return (
        <Container component="main" maxWidth="md">
            <form onSubmit={(e) => handleOnSubmit(e)} name="myform">
                <Grid container ms={12}>
                    <InputField
                        name="situation"
                        label="Situation"
                        value={ticket.situation}
                        placeholder="Type what's happened"
                        handleChange={handleChange}
                    ></InputField>
                    <InputField
                        name="behaviour"
                        label="Behavior"
                        placeholder="Type how you acted in this situation"
                        handleChange={handleChange}
                    ></InputField>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Feelings</FormLabel>
                        <FormGroup row>
                            <CheckBoxField
                                name="anger"
                                handleBoxChange={handleBoxChange}
                                label="anger"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="fear"
                                name="fear"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="shame"
                                name="shame"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="surprise"
                                name="surprise"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="disgust"
                                name="disgust"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="happiness"
                                name="happiness"
                            />
                        </FormGroup>
                    </FormControl>
                    <InputField
                        name="thought"
                        label="Thought"
                        placeholder="Type your thoughts"
                        handleChange={handleChange}
                    ></InputField>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Biases</FormLabel>
                        <FormGroup row>
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="all-or-nothing"
                                name="allOrNothing"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="overgeneralization"
                                name="overgeneralization"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="mental filter"
                                name="mental filter"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="disqualifying the positive"
                                name="disqualifyingThePositive"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="jumping to conclusion"
                                name="jumpingToConclusion"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="magnification"
                                name="magnification"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="emotional reasoning"
                                name="emotionalReasoning"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="should statement"
                                name="shouldStatement"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="labeling"
                                name="labeling"
                            />
                            <CheckBoxField
                                handleBoxChange={handleBoxChange}
                                label="personalization"
                                name="personalization"
                            />
                        </FormGroup>
                    </FormControl>
                    <InputField
                        name="Corrected thought"
                        label="Corrected thought"
                        placeholder="Find more rational thought"
                        handleChange={handleChange}
                    ></InputField>
                </Grid>
                <Button name="add" type="submit">
                    save/add
                </Button>
                <Button name="delete" type="submit">
                    delete
                </Button>
            </form>
        </Container>
    );
}
