import { put, call } from 'redux-saga/effects'
import RickAndMortyService from '../services/rickAndMortyService';
import { nextPageReceived, nextPageReceiving } from '../actions/character'

import store from '../store';


export function* characterListPageOpened() {
    yield call(fetchNextPage);
}

export function* fetchNextPage() {
    yield put(nextPageReceiving());
    const currState = store.getState().character;
    const nextPage = currState.page + 1;
    const response = yield call(RickAndMortyService.getPaged, nextPage);
    yield put(nextPageReceived(response));
}