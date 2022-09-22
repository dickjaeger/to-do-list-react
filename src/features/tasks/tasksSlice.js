import { createSlice } from '@reduxjs/toolkit'
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        doneTasksHidden: false,
        error: "",
        loading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks.splice(index, 1);
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        setAllTasksDone: ({ tasks }) => {
            tasks.map(task => task.done = true);
        },
        toggleDoneTasksHidden: (state) => {
            state.doneTasksHidden = !state.doneTasksHidden;
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        setError: (state, { payload: error }) => {
            state.error = error;
        },
        setLoading: (state, { payload: loading }) => {
            state.loading = loading;
        },
    },
});

export const {
    addTask,
    removeTask,
    toggleTaskDone,
    toggleDoneTasksHidden,
    setAllTasksDone,
    fetchExampleTasks,
    setTasks,
    setError,
    setLoading,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;