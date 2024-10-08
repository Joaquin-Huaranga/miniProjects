import React, {useState} from 'react';
import styled from "styled-components";

export const PresentationSection = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [editTask, setEditTask] = useState(null)

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };
    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <Container>
            <Button onClick={addTask}>Add Task</Button>
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
                        <RemoveButton onClick={() => removeTask(index)}>Eliminar</RemoveButton>
                    </TaskItem>
                ))}
            </TaskList>

        </Container>
    );
};

const Container = styled.div`
    max-width: 100%;
    
    margin-left: 20em;
    margin-right: 20em;
    padding-top: 2em;
    align-content: center;
`;


const InputContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin-bottom: 1em;
`;

const Input = styled.input`
    flex: 1;
    padding: 1em;
    border: 1em solid darkslateblue;
    border-radius: 4px;
`;

const Button = styled.button`
    
    margin-bottom: 1em;
    border: solid darkslateblue;
    padding: 10px;
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
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 0.5em solid darkslateblue;
    margin-bottom: 2em;
    border-radius: 2em;
    background-color: white;
`;

const RemoveButton = styled.button`
    background-color: darkslateblue;
    padding-left: 1em;
    padding-right: 1em;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #c82333;
    }
`;