import React, { useState } from 'react';
import styled from "styled-components";

export const PresentationSection = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [editTaskIndex, setEditTaskIndex] = useState(null);

    const addTask = () => {
        if (task.trim()) {
            if (editTaskIndex !== null) {
                const updatedTasks = tasks.map((t, index) => (index === editTaskIndex ? task : t));
                setTasks(updatedTasks);
                setEditTaskIndex(null);
            } else {
                setTasks([...tasks, task]);
            }
            setTask('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const startEditTask = (index) => {
        setTask(tasks[index]);
        setEditTaskIndex(index);
    };

    return (
        <Container>
            <Button onClick={addTask}>
                {editTaskIndex !== null ? 'Guardar' : 'Agregar Tarea'}
            </Button>
            <InputContainer>
                <Input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Agregar nueva tarea"
                />
            </InputContainer>
            <TaskList>
                {tasks.map((t, index) => (
                    <TaskItem key={index}>
                        {t}
                        <ButtonGroup>
                            <EditButton onClick={() => startEditTask(index)}>Editar</EditButton>
                            <RemoveButton onClick={() => removeTask(index)}>Eliminar</RemoveButton>
                        </ButtonGroup>
                    </TaskItem>
                ))}
            </TaskList>
        </Container>
    );
};

const Container = styled.div`
    max-width: 90%; /* Asegúrate de que el contenedor no exceda el 90% de la pantalla */
    margin: 2em auto; /* Centramos el contenedor */
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-content: center;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column; /* Cambiado para stacks verticalmente en pantallas pequeñas */
    margin-bottom: 1em;
    @media (min-width: 600px) {
        flex-direction: row; /* Cambia a horizontal en pantallas más anchas */
    }
`;

const Input = styled.input`
    font-family: "Berlin Sans FB";
    flex: 1;
    padding: 0.5em;
    border: 1em solid darkslateblue;
    border-radius: 4px;
    margin-bottom: 1em; 
    @media (min-width: 600px) {
        margin-bottom: 0; 
        margin-right: 0; 
    }
`;

const Button = styled.button`
    font-family: "Berlin Sans FB";
    margin-bottom: 1em;
    padding: 0.5em 1em;
    border: solid darkslateblue;
    background-color: white;
    color: black;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: darkblue;
        background-color: lightblue;
        border: solid white;
    }
`;

const TaskList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const TaskItem = styled.li`
    font-family: "Berlin Sans FB";
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 0.5em solid darkslateblue;
    margin-bottom: 1em;
    border-radius: 4px;
    background-color: white;
    @media (max-width: 600px) {
        flex-direction: column; /* Cambia a columna en pantallas pequeñas */
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const EditButton = styled.button`
    background-color: lightgreen;
    padding: 0.5em 1em;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #c3e6cb;
    }
`;

const RemoveButton = styled.button`
    background-color: darkslateblue;
    padding: 0.5em 1em;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #c82333;
    }
`;