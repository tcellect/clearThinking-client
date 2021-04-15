import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    Icon,
} from "@material-ui/core";
import { signin, signup } from "../../api/index.js";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InputField from "./InputField/InputField.js";

export default function Auth() {
    const googleId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const doRegister = () => {
        setIsSignUp((prevState) => !prevState);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            signup(formData);
        } else {
            signin(formData);
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleShowPassword = () => setShowPassword((prevState) => !prevState);
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        // TODO: before app got too complicated think of using a state manager like redux
        // TODO: add log out as well
        try {
            localStorage.setItem(
                "profile",
                JSON.stringify({ ...result, token })
            );
        } catch (error) {
            console.log(error);
        }
    };
    const googleFailure = () => {
        console.log("failed to login with google");
    };
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
                                    name="lastName"
                                    label="Last name"
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
                    <GoogleLogin
                        clientId={googleId}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                        render={(renderProps) => (
                            <Button
                                color="primary"
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                variant="contained"
                            >
                                Google Sing In
                            </Button>
                        )}
                    />
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
