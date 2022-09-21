import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasks/tasksSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

store.subscribe(() => {
    localStorage.setItem("tasksState", JSON.stringify(store.getState()));
});
