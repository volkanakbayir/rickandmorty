import { put, call } from 'redux-saga/effects'
import RickAndMortyService from '../services/rickAndMortyService';
import { nextPageReceived, nextPageReceiving } from '../actions/character'
import { extractLastPathPartFromUri } from '../utils/generic'
import store from '../store';

export function* characterListPageOpened() {
    yield call(fetchNextPage);
}

export function* fetchNextPage() {
    yield put(nextPageReceiving());
    const currState = store.getState().character;
    const pageToCall = currState.nextPage || 1;
    const response = yield call(RickAndMortyService.getPaged.bind(RickAndMortyService), pageToCall);
    const nextPage = extractLastPathPartFromUri(response.info.next).split('page=')[1]; // some kind of hack to get next page number
    yield put(nextPageReceived({
        ...response,
        nextPage: nextPage,
        allPagesLoaded: nextPage > response.info.pages
    }));
}