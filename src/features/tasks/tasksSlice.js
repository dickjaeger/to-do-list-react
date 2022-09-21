import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('tasksState')
    ? JSON.parse(localStorage.getItem('tasksState')).tasks
    : {
        tasks: [],
        doneTasksHidden: false,
    };

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },

        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks.splice(index, 1);
        },

        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].done = !tasks[index].done;
        },

        setAllTasksDone: ({ tasks }) => {
            tasks.map(task => task.done = true);
        },

        toggleDoneTasksHidden: state => {
            state.doneTasksHidden = !state.doneTasksHidden;
        },
    },
});


export const {
    addTask,
    removeTask,
    toggleTaskDone,
    toggleDoneTasksHidden,
    setAllTasksDone
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;