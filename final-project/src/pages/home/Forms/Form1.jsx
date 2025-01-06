import React, {useState} from 'react';
import styled from "styled-components";

export const Form1 = () => {
    const [formData, setFormData] = useState({
        device : '',
        issue: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <h1>EQUIPO A REPARAR</h1>
                <h2>Datos del dispositivo</h2>

                <div>
                    <input
                        label="Equipo a reparar"
                        type="device"
                        name="device"
                        value={formData.device}
                        onChange={handleChange}/>
                </div>
                <div>
                    <textarea
                        label="Problema que presenta"
                        type="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleChange}/>
                </div>
                <button type="submit">Continuar</button>
                <p>GRATIS la consulta y diagnostico, la atención a domicilio tiene un costo de S/.50 por concepto de translado del técnico</p>
            </form>
        </Container>
    );
};

const Container = styled.div`
    border-radius: 0.5em;
    align-self: center;
    margin: auto;
    display: block;
    background-color: white;
    color: #212529;
    width: 80%;
    height: 20em;
    text-align: center;
    align-content: center;

    h1 {
        font-size: 1rem;
        margin: 0.5em;
    }

    h2 {
        font-size: 0.8rem;
        margin: 0.5em;
    }
    div{
        margin: 0.5em;
        input{
            width: 95%;
            height: 3em;
        }
        textarea{
            width: 95%;
            height: 5em;
        }
    }
    button{
        color: white;
        font-weight: bold;
        margin: 0.5em;
        padding: 1em 2em ;
        background-color: #27ae60 ;
        border: none;
        border-radius: 0.3em;
    }
    p{
        font-size: 0.65em;
        margin: 0.5em;
    }
`;
