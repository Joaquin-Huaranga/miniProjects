import React from 'react';
import styled from "styled-components";

export const Table = ({attendanceData}) => {
    return (
        <Container>
            <h1>Control de asistencia</h1>
            <TableContainer>
                <thead>
                <tr>
                    <th className="Control">Control</th>
                    <th></th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
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
                    <td></td>
                </tr>
                <tr>
                    <th>Total minutos</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Total Almuerzo</th>
                    <td></td>
                </tr>
                </tbody>
            </DataTable>
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
    background-color: lightcyan;

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
    width: 50%;
    margin: 5%;
    border-collapse: collapse;
    border: 0.2em solid black;
    tr{
        height: 3em;
        text-align: center;
        align-content: center;
        border: 0.2em solid black;
    }
    th{
        background-color: gray;
        border: 0.2em solid black;
    }
    td{
        color: black;
        background-color: darkgrey;
        border: 0.2em solid black;
    }
`;