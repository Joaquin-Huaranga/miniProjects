import React from 'react';
import styled from "styled-components";

export const HeaderLayout = () => {
    return (
        <Container>
            <NavContainer>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Random1</a></li>
                    <li><a href="#">Random2</a></li>
                    <li><a href="#">Random3</a></li>
                </ul>
            </NavContainer>
        </Container>
    );
};

const Container = styled.div`
    height: 5em;
    background-color: black;
    text-align: center;
    align-content: center;
    color: darkslateblue;
`;

const NavContainer = styled.nav`
    color: white;
    ul{
        justify-content: space-between;
        display: flex;
        list-style: none;
        li{
            a{
                color: white;
                text-decoration: none;
            }
        }
    }
`;