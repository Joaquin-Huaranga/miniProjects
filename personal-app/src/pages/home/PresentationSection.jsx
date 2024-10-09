import React, { useState } from 'react';
import styled from "styled-components";
import {MapComponents} from "./MapComponents.jsx";

export const PresentationSection = () => {
    return (

        <Container>
            <MapComponents/>

        </Container>
    );
};

const Container = styled.div`

`;
