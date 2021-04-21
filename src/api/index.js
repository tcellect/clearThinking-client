import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getTickets = () =>
    API.get("/ticket").then(
        (response) => {
            return response.data;
        },
        (error) => {
            console.log(error);
        }
    );
export const postTicket = (ticket) =>
    API.post(`/ticket`, ticket).then(
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
