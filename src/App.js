import React from "react"
import useStyles from "./styles.js";
import Home from "./components/Home/Home.js";
import { BrowserRouter, Rout, Switch } from "react-router-dom";

function App() {

    return (
        <>
            {/* <Navbar/>  */}
            <Home />
        </>
    );
}

export default App;
