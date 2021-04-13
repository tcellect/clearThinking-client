import React from 'react'
import {Link} from "react-router-dom"
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"

export default function Navbar() {
    const user = null
    return (
        <AppBar>
            <Typography component={Link} to="/" variant="h3" align="center">Navbar is back</Typography>
            <Toolbar>
                {
                    user ? (
                        <div>
                            <Avatar alt={user.result.name} src={user.result.imgUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography>{user.result.name}</Typography>
                            <Button variant="contained"> logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">sign in</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}
