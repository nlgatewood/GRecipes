import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [message, setMessage] = useState([]);

  //data will be the string we send from our server
  function apiCall() {

    axios.get('http://localhost:8080').then((response) => {
      
      setMessage(response.data);

    })
}

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={apiCall}>Make API Call</button>
        <p>{message}</p>

      </header>
    </div>
  );
};
export default App