import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dividerDesktop from "../_assets/img/pattern-divider-desktop.svg";
import dividerMobile from "../_assets/img/pattern-divider-mobile.svg";
import buttonChangeAdvice from "../_assets/img/icon-dice.svg"


export const CardContainer = styled.section`
    display: flex;
    background-color: #323a49;
    color: #cee3e9;
    padding: 40px;
    flex-direction: column;
    margin: auto;
    max-width: 400px;
    text-align: center;
    border-radius: 10px;

    p.title {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 15px;
        margin-bottom: 20px;
        color: #52ffa8;
    }

    p.advice {
        font-size: 28px;
        margin-bottom: 20px;
    }

    picture {
        margin-bottom: 30px;
    }

    span {
        background: #52ffa8;
        display: flex;
        justify-content: center;
        padding: 15px 28px;
        width: 50px;
        border-radius: 50%;
        margin: auto auto -70px;
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
            box-shadow: 1px 1px 20px 4px #52ffa8;
        }
    }

    img {
        width: 100%;
    }
    .button-change-advice {
        width: auto;
    }
`;

const Card = () => {

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
        <CardContainer>
            <p className="title">Advice #{text.id}</p>
            <p className="advice"><q>{text.advice}</q></p>
            <picture>
                <source media="(max-width:350px)" srcset={dividerMobile} type="image/svg" />
                <img src={dividerDesktop} alt="Pattern Divider Desktop" />
            </picture>
            <span onClick={fetchAdvice}><img className="button-change-advice" src={buttonChangeAdvice} alt="Buttom Change Advice" /></span>
        </CardContainer>
    );
}

export default Card;