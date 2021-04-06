import axios from 'axios'

const url = "http://localhost:5000/bias"

export const getBiases = () => axios.get(url)
export const postBias = (bias) => axios.post(url, bias).then(response => { 
    console.log(response)
}, error => {
    console.log(error)
})