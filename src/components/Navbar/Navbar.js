import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

export default function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

    useEffect(() => {
        // const token = user?.token
        setUser(JSON.parse(localStorage.getItem("profile")))
    }, [])

    return (
        <AppBar>
            <Typography component={Link} to="/" variant="h3" align="center">
                Navbar is back
            </Typography>
            <Toolbar>
                {user ? (
                    <div>
                        {/* <Avatar alt={user.result.name} src={user.result.imgUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography>{user.result.name}</Typography> */}
                        <Typography>it works</Typography>
                        <Button variant="contained"> logout</Button>
                    </div>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                    >
                        sign in
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}
