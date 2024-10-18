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
    border: 0.3em solid gray;
    width: 100%;
    height: auto;
    background-color: rgba(233,238,246,1);

    h1 {
        text-align: center;
        font-family:apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
        font-size: 3em;
        font-weight: bold;
        color: gray;
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
        border: none;
        background-color: lightblue;
    }
    th.estado{
        background-color: lightblue;
        color: black;
    }
    th.Control{
        color: white;
        background-color: rgba(64,150,255,1);
    }
    tr {
        height: 3.5em;
        text-align: center;
        align-content: center;
        border: 1px solid black;
    }
    td {
        color: black;
        border: none;
        background-color: white;
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
        background-color: rgba(64,150,255,1);
        padding: 0.5em;
        border: 0.2em solid black;
    }
    td {
        color: black;
        background-color: white;
        border: 0.2em solid black;
        padding: 0.5em;
    }
`;
const ButtonCalculateTotal = styled.button`
    border-radius: 1em;
    border: none;
    padding: 1em;
    display: block;
    margin: 0 auto;
    font-size: 1.4em;
    font-weight: bolder;
    font-family:apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
    background-color: rgba(64,150,255,1);
    color: white;

    &:hover{
        background-color: white;
        color: rgba(64,150,255,1);
    }
`;