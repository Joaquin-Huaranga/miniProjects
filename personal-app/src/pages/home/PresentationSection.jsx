import React from 'react';
import styled from "styled-components";
import {Map} from "./Map.jsx"
import {useJsApiLoader} from "@react-google-maps/api";
import {mapOptions} from "./MapConfigurations.jsx";

export const PresentationSection = () => {
    const {isLoaded} = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey:mapOptions.googleMapApiKey
    });

    return (
        <Container>

            <center>
            <ButtonAssist >
                Marcar Asistencia
            </ButtonAssist>
            </center>

            <Map isLoaded = {isLoaded}/>


        </Container>
    );
};

const Container = styled.div`
    max-width: 80%;
    margin-left: 10%;
    margin-right: 10%;`;


const ButtonAssist = styled.button`
    margin: 2em;
    padding: 1em;
    border-color: blue;
    border-radius: 2em;
    background-color: white;
    color: blue;
    
    &:hover{
        background-color: blue;
        color: white;
        border-color: white;
    }
`;