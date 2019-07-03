import { put, call } from 'redux-saga/effects'
import RickAndMortyService from '../services/rickAndMortyService';
import { characterDetailInfoReceived, characterDetailPageLoading } from '../actions/characterDetail'
import { extractIdFromApiUrl } from '../utils/generic'

export function* characterDetailPageOpened(action) {
    yield put(characterDetailPageLoading());
    const characterDetails = yield call(RickAndMortyService.getCharacter, action.payload);
    const lastFiveEpisodes = characterDetails.episode.reverse().slice(0, 5);
    const episodeIds = lastFiveEpisodes.map(extractIdFromApiUrl);
    const characterEpisodes = yield call(RickAndMortyService.getEpisodes, episodeIds);
    yield put(characterDetailInfoReceived({
        characterDetails,
        characterEpisodes
    }));
}