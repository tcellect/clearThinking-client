import React from "react";
import useStyles from "./styles.js";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth.js";
import Home from "./components/Home/Home.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/auth" exact component={Auth}></Route>
            </Switch>
            {/* <Home /> */}
        </BrowserRouter>
    );
}

export default App;
