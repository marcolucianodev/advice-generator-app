import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Card from './components/Card';


const App = () => {

// const [text, setText] = useState([]);

// const fetchAdvice = async () => {
//     const res = await fetch('https://api.adviceslip.com/advice')
//     const data = await res.json()
//     console.log(data)
//     setText(data.slip)
// }

// useEffect(() => {
//     fetchAdvice()
// }, [])


return (
    <Container>
        <Card />
    </Container>      
);

}

export default App;
