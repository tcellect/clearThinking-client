import React, { useState} from "react"
import './App.css';
import { getBiases, postBias } from "./api/index.js"

function App() {

  // TODO: delete all the unnecessery stuff here

  const [bias, setBias] = useState({ biasText : ""})

  // TODO: clear the form after submit
  const handleSubmit = (e) => {
    e.preventDefault()
    postBias(bias)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={ (e) => 
          handleSubmit(e)
          }>
          <input
           name="bias"
           type="text"
           value={bias.bias}
           onChange={e => setBias({...bias, biasText: e.target.value})}>
          </input>
          <button ></button>
        </form>
      </header>
    </div>
  );
}

export default App;
