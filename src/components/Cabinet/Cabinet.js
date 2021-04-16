import React from "react";
import {
    Typography,
    Grid,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    makeStyles,
    List,
    Divider,
} from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import Cognitions from "../Cabinet/Cognitions/Cognitions";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

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
