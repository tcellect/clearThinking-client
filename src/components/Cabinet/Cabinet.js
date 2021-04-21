import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Cognitions from "../Cabinet/Cognitions/Cognitions";
import useStyles from "./styles.js"


export default function Cabinet() {
    const classes = useStyles();
    return (
        <div>
            <Sidebar />
            <div className={classes.toolbar}>
                <Cognitions />
            </div>
        </div>
    );
}
