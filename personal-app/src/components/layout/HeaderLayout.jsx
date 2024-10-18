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
    
    background-color: rgba(66,62,236,1);
    text-align: center;
    align-content: center;
    color: white;
    h1{
        font-size: 4em;
        font-family:apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
    }
`;