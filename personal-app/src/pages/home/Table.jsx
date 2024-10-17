import React from 'react';
import styled from "styled-components";

export const Table = ({attendanceData,onCalculateTotal}) => {

    return (
        <Container>
            <h1>Control de asistencia</h1>
            <TableContainer>
                <thead>
                <tr>
                    <th scope="col" className="Control">Control</th>
                    <th></th>
                    <th scope="col">Lunes</th>
                    <th scope="col">Martes</th>
                    <th scope="col">Miércoles</th>
                    <th scope="col">Jueves</th>
                    <th scope="col">Viernes</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="estado">Entrada</th>
                    {attendanceData.entries.map((entry, index) => (
                        <td key={index}>{entry}</td>
                    ))}
                </tr>
                <tr>
                    <th className="estado">Salida</th>
                    {attendanceData.exits.map((exit, index) => (
                        <td key={index}>{exit}</td>
                    ))}
                </tr>
                <tr>
                    <th className="estado">Total</th>
                    {attendanceData.totals.map((total, index) => (
                        <td key={index}>{total}</td>
                    ))}
                </tr>
                <tr>
                    <th className="estado">Almuerzo</th>
                    {attendanceData.lunches.map((lunch, index) => (
                        <td key={index}>{lunch}</td>
                    ))}
                </tr>
                </tbody>
            </TableContainer>

            <DataTable>
                <tbody>
                <tr>
                    <th>Horas y minutos</th>
                    <td>{attendanceData.totalTime}</td>
                </tr>
                <tr>
                    <th>Total minutos</th>
                    <td>{attendanceData.totalMinutes}</td>
                </tr>
                <tr>
                    <th>Total Almuerzo</th>
                    <td>{attendanceData.totalLunch}</td>
                </tr>
                </tbody>
            </DataTable>
            <ButtonCalculateTotal onClick={onCalculateTotal}>
                Calcular Total
            </ButtonCalculateTotal>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 2em;
    padding: 2em;
    border-radius: 2em;
    border: 0.3em solid black;
    width: 100%;
    height: auto;
    background-color: #6DBE45; /* Verde ligeramente más suave */

    h1 {
        text-align: center;
        font-family: "Bell MT";
        text-decoration: underline;
        font-size: 3em;
        font-weight: bold;
        color: black;
    }
`;

const TableContainer = styled.table`
    
    color: white;
    max-width: 90%;
    width: 90%;
    margin: 5%;
    border-collapse: collapse;
    border: 0.2em solid black;

    th {
        color: black;
        border: 0.3em solid black;
        background-color: orange;
    }
    th.estado{
        background-color: lightblue;
        color: black;
    }
    th.Control{
        color: white;
        background-color: black;
    }
    tr {
        height: 3.5em;
        text-align: center;
        align-content: center;
        border: 0.2em solid black;
    }
    td {
        color: black;
        border: 0.2em solid black;
        background-color: greenyellow;
    }
    
`;

const DataTable = styled.table`
    color: black;
    width: 60%;
    margin: 2em auto;
    border-collapse: collapse;
    border: 0.2em solid black;
    tr {
        height: 3em;
        text-align: center;
        align-content: center;
        border: 0.2em solid black;
    }
    th {
        background-color: gray;
        padding: 0.5em;
        border: 0.2em solid black;
    }
    td {
        color: black;
        background-color: darkgrey;
        border: 0.2em solid black;
        padding: 0.5em;
    }
`;
const ButtonCalculateTotal = styled.button`
    padding: 1em;
    display: block;
    margin: 0 auto;
    font-size: 1.4em;
    font-weight: bolder;
    font-family: "Bell MT";
    border-color: greenyellow;
    border-radius: 2em;
    background-color: darkgreen;
    color: greenyellow;

    &:hover{
        background-color: greenyellow;
        color: darkgreen;
        border-color: darkgreen;
    }
`;