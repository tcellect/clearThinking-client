import React, { useState} from "react"
import { Container, AppBar, Typography, Grow, Grid, InputBase, Button, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { getBiases, postBias } from "./api/index.js"
import useStyles from "./styles.js"

function App() {
  const classes= useStyles()

  // TODO: make a separate component with a list of biases types. refactor stuff into separate components as much as necessery
  const sample = {
    "ALL-OR-NOTHING THINKING": "ALL-OR-NOTHING THINKING",
    "OVERGENERALIZATION": "OVERGENERALIZATION",
    "MENTAL FILTER": "MENTAL FILTER",
    "DISQUALIFYING THE POSITIVE": "DISQUALIFYING THE POSITIVE",
    "JUMPING TO CONCLUSIONS": "JUMPING TO CONCLUSIONS",
    "Mind reading": "Mind reading",
    "The Fortune Teller Error": "The Fortune Teller Error",
    "MAGNIFICATION (CATASTROPHIZING) OR MINIMIZATION":"MAGNIFICATION (CATASTROPHIZING) OR MINIMIZATION",
    "EMOTIONAL REASONING": "EMOTIONAL REASONING",
    "SHOULD STATEMENTS": "SHOULD STATEMENTS",
    "LABELING AND MISLABELING": "LABELING AND MISLABELING:",
    "PERSONALIZATION": "PERSONALIZATION"
  }

  const [bias, setBias] = useState({ biasText : ""})

  // TODO: clear the form after submit properly
  const handleSubmit = (e) => {
    e.preventDefault()
    postBias(bias)
    setBias({...bias, biasText: ""})
  }

  return (
    <>  
    <Container maxWidth="lg">
        <Typography variant="h3" align="center">Find Biases</Typography>
    </Container>
    <Container maxWidth="lg">
      <form onSubmit={(e) => handleSubmit(e)}>
        <AppBar position="static" color="inherit">
            <InputBase 
            id="base-input"
            placeholder={'your sentence'}
            onChange={(e) => setBias({...bias, biasText: e.target.value})}
            endAdornment={
              <Button type="submit" variant="contained" color="primary" disableElevation startIcon={<SearchIcon />}>
                find
              </Button>
            }
            >
            </InputBase>
        </AppBar>
      </form>
        <Grid className={classes.test}>
          <Grid item size="xs">
            <Typography fullWithh variant="h3" fontWeight="fontWeightLight" align="center">{bias.biasText}</Typography>
          </Grid>
        </Grid>
        <Container>
          <p>
            People have constant inner dialogs with oneself which often stay unnoticed. Logical distortions in such dialogs may lead to unwanted negative emotional states. You can try to indetify dialogs and biases in own thinking. To reduce stress try to come up with more rational variants. Here is a list of ten common biases:
          </p>
          <br/>
          <p>
            "ALL-OR-NOTHING THINKING": "ALL-OR-NOTHING THINKING",
            "OVERGENERALIZATION": "OVERGENERALIZATION",
            "MENTAL FILTER": "MENTAL FILTER",
            "DISQUALIFYING THE POSITIVE": "DISQUALIFYING THE POSITIVE",
            "JUMPING TO CONCLUSIONS": "JUMPING TO CONCLUSIONS",
            "Mind reading": "Mind reading",
            "The Fortune Teller Error": "The Fortune Teller Error",
            "MAGNIFICATION (CATASTROPHIZING) OR MINIMIZATION":"MAGNIFICATION (CATASTROPHIZING) OR MINIMIZATION",
            "EMOTIONAL REASONING": "EMOTIONAL REASONING",
            "SHOULD STATEMENTS": "SHOULD STATEMENTS",
            "LABELING AND MISLABELING": "LABELING AND MISLABELING:",
            "PERSONALIZATION": "PERSONALIZATION"
          </p>
        </Container>
    </Container>
    </>
  );
}

export default App;
