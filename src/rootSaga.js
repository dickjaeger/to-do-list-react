import { all } from 'redux-saga/effects'
import { tasksSaga } from './features/tasks/tasksSaga';
// import { saga2 } from "./saga2";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
        //saga2()
    ]);
};