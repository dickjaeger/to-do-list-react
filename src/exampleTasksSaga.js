import { call, takeLatest } from "redux-saga/effects";
import { getProducts, getTasks } from "./api";
import { fetchMovieSuccess, fetchMovieError, fetchMovie } from "./movieSlice";

function* setExampleTasksHandler({ payload: movieId }) {
    try {
    const movie = yield call(getMovie, movieId);
    yield put(fetchMovieSuccess(movie));
    } catch (error) {
    yield put(fetchMovieError(error));
    }
   }
   export function* watchFetchMovie() {
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
   }
