import axios from 'axios'

const url = "http://localhost:5000/bias" // "https://clearthinking.herokuapp.com"

export const getBiases = async () => await axios.get(url).then(response => {
     return response.data
}, error => {
    console.log(error)
})
export const postBias = (bias) => axios.post(url, bias).then(response => { 
    console.log("post response: ", response)
}, error => {
    console.log(error)
})