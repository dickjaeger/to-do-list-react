import { takeEvery, takeLatest, call, put, delay, select } from 'redux-saga/effects'
import { fetchExampleTasks, setTasks, setLoading, setError, selectTasks } from './tasksSlice'
import { getExampleTasks } from './getExampleTasks'
import { setTasksInLocalStorage } from './tasksLocalStorage'

function* fetchExampleTasksHandler() {
    try {
        yield put(setLoading(true));
        const exampleTasks = yield call(getExampleTasks);
        yield delay(2000);
        yield put(setTasks(exampleTasks));
        yield put(setLoading(false));
    } catch (error) {
        yield put(setError("Błąd pobierania"));
    };
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(setTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};