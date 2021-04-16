import React from "react";
import useStyles from "./styles.js";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth.js";
import Home from "./components/Home/Home.js";
import Cabinet from "./components/Cabinet/Cabinet.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import EditCognition from "./components/Cabinet/Cognitions/Cognition/EditCognition"

function App() {
    return (
        <div>
            <BrowserRouter>
                <CssBaseline />
                {/* <Navbar /> */}
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/auth" exact component={Auth}></Route>
                    <Route path="/cabinet" exact component={Cabinet}></Route>
                    <Route path="/cabinet/:id" exact component={EditCognition}></Route>
                </Switch>
                <main>{/* <Home /> */}</main>
            </BrowserRouter>
        </div>
    );
}

export default App;
