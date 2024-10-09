import React from 'react';
import styled from "styled-components";

export const FooterLayout = () => {
    return (
        <Container>
            <ul>
                <p>Copyright © 2024 Servitec</p>
                <li>
                    <a href="#">Privacy policy</a>
                </li>
                <li>
                    <a href="#">Terms of Use</a>
                </li>
                <li>
                    <a href="#">Sales and Refund</a>
                </li>
                <li>
                    <a href="#">Legal</a>
                </li>
                <li>
                    <a href="#">Site Map</a>
                </li>
            </ul>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #eee;
    color: #444;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 1em;
    p {
        color: #444;
        font-size: 0.7em;
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0.2em 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2.5em;
        li {
            font-size: 0.7em;
            font-weight: 400;
            a {
                text-decoration: none;
                color: #444;
            }
        }
    }`;