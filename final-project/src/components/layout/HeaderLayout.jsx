import React from 'react';
import styled from "styled-components";

export const HeaderLayout = () => {
    return (
        <Container>
            <NavContainer>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Desarrollo Web</a></li>
                    <li><a href="#">Aplicaciones</a></li>
                    <li><a href="#">Sistemas</a></li>
                    <li><a href="#">Facturacion Electrnica</a></li>
                    <li><a href="#">Marketing Digital</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </NavContainer>
        </Container>
    );
};

const Container = styled.div`
    height: 5em;
    background-color: #343a40;
    text-align: center;
    align-content: center;
    color: darkslateblue;
`;

const NavContainer = styled.nav`
    color: white;
    ul{
        display: flex;
        list-style: none;
        justify-content: space-around;
        li{
            a{
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";;
                color: white;
                text-decoration: none;
            }
        }
    }
`;