import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTask } from '../tasksSlice';
import { Form as StyledForm, Input, Button } from './styled';

const Form = () => {
    const dispatch = useDispatch();
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                type="text"
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;