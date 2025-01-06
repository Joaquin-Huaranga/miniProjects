import React from 'react';
import styled from "styled-components";
import {FormContainer} from "./FormContainer.jsx";

export const PresentationSection = () => {

    return (
        <Container>
            <FormContainer/>
        </Container>
    );
};

const Container = styled.div`
    background-color: #212529;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";;
    width: 100%;
    height: 100vh;
    align-content: center;
`;