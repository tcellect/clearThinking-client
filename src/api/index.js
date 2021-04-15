import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getBiases = async () =>
    await API.get("/bias").then(
        (response) => {
            return response.data;
        },
        (error) => {
            console.log(error);
        }
    );
export const postBias = (bias) =>
    API.post("/bias", bias).then(
        (response) => {
            console.log("post response: ", response);
        },
        (error) => {
            console.log(error);
        }
    );

export const signin = (user) =>
    API.post("/user/signin", user).then(
        (response) => {
            console.log("signin response: ", response);
        },
        (error) => {
            console.log(error.message);
        }
    );

// TODO: fix error message on existing user
export const signup = (user) =>
    API.post("/user/signup", user).then(
        (response) => {
            console.log("signup response: ", response);
        },
        (error) => {
            console.log(error.message);
        }
    );
