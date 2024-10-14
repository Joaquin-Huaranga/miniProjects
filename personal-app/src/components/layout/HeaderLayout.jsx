import React from 'react';
import styled from "styled-components";

export const HeaderLayout = () => {
    return (
        <Container>
            <h1>Geolocation App</h1>
        </Container>
    );
};

const Container = styled.div`
    height: 10em;
    
    background-color: white;
    text-align: center;
    border: solid black;
    align-content: center;
    color: darkslateblue;
    h1{
        font-size: 4em;
        font-family: "Berlin Sans FB";    }
`;