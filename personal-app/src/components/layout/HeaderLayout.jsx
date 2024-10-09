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
    height: 5em;
    background-color: #eee;
    text-align: center;
    border: solid white;
    align-content: center;
    color: darkslateblue;
    h1{

        font-family: "Berlin Sans FB";    }
`;