import { put, call } from 'redux-saga/effects'
import RickAndMortyService from '../services/rickAndMortyService';
import { characterDetailInfoReceived, characterDetailPageLoading } from '../actions/characterDetail'
import { extractLastPathPartFromUri } from '../utils/generic'

export function* characterDetailPageOpened(action) {
    yield put(characterDetailPageLoading());    
    const characterDetails = yield call(RickAndMortyService.getCharacter.bind(RickAndMortyService), action.payload);
    const lastFiveEpisodes = characterDetails.episode.reverse().slice(0, 5);
    const episodeIds = lastFiveEpisodes.map(extractLastPathPartFromUri);
    const characterEpisodes = yield call(RickAndMortyService.getEpisodes.bind(RickAndMortyService), episodeIds);
    yield put(characterDetailInfoReceived({
        characterDetails,
        characterEpisodes
    }));
}