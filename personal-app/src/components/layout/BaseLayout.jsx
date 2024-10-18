import React from 'react';
import styled from "styled-components";
import {HeaderLayout} from "./HeaderLayout.jsx";
import {FooterLayout} from "./FooterLayout.jsx";
import {backPhoto} from "../../../public/index.js";

export const BaseLayout = ({children}) => {
    return (
        <Container>
            <HeaderLayout/>
            <div className="main">{children}</div>
            <FooterLayout/>
        </Container>
    );
};

const Container = styled.div`
.main{
    
}
    background-image: url(${backPhoto});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed ;
`;