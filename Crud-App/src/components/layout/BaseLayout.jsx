import React from 'react';
import styled from "styled-components";
import {HeaderLayout} from "./HeaderLayout.jsx";
import {FooterLayout} from "./FooterLayout.jsx";

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
    background-color: lightblue;
`;