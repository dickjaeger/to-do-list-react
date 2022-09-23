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

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectIsLoading = state => selectTasksState(state).loading;
export const selectError = state => selectTasksState(state).error;
export const selectAreDoneTasksHidden = state => selectTasksState(state).doneTasksHidden;

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    };

    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
};

export const selectTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;