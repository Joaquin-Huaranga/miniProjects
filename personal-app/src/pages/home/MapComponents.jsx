import React from 'react';
import styled from "styled-components";

export const MapComponents = () => {
    return (
        <Container>

            <ButtonLocate>
                Marcar Asistencia
            </ButtonLocate>
            <MapContainer>
                <h1>AQUÍ IRÁ EL MAPA</h1>
            </MapContainer>

        </Container>
    );
};

const Container = styled.div`
   
`;

const MapContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    height: auto;
`;

const ButtonLocate = styled.button`
    padding: 1em;
    border-color: blue;
    background-color: white;
    color: blue;
    
    &:hover{
        background-color: blue;
        color: white;
        border-color: white;
    }
`;