import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import axios from 'axios';



const App = () => {

const [text, setText] = useState([]);

const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    console.log(data)
    setText(data.slip)
}

useEffect(() => {
    fetchAdvice()
}, [])


return (
    <div>      
        <h1>{text.id}</h1>
        <p>{text.advice}</p>
        <button onClick={fetchAdvice}>Carregar Advices</button>
    </div>
);

}

export default App;
