import React, { useState } from "react";
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InputField from "./InputField/InputField.js";

export default function Auth() {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const doRegister = () => {
        setIsSignUp((prevState) => !prevState);
    };
    const onSubmit = () => {};
    const handleChange = () => {};
    const handleShowPassword = () => setShowPassword((prevState) => !prevState);
    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3}>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">
                    {isSignUp ? "Sign up" : "Sign in"}
                </Typography>
                <form onSubmit={(e) => onSubmit(e)}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <InputField
                                    name="firstName"
                                    label="First name"
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                ></InputField>
                                <InputField
                                    name="firstName"
                                    label="First name"
                                    handleChange={handleChange}
                                    half
                                ></InputField>
                            </>
                        )}
                        <InputField
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email"
                        />
                        <InputField
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            handleShowPassword={handleShowPassword}
                            type={showPassword ? "text" : "password"}
                        />
                        {isSignUp && (
                            <InputField
                                name="confirmPassword"
                                label="Repeat Password"
                                handleChange={handleChange}
                                type="password"
                            />
                        )}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                    <Grid container justift="flex-end">
                        <Grid item>
                            <Button onClick={doRegister}>
                                {isSignUp
                                    ? "Already have an account? Sign In"
                                    : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}
