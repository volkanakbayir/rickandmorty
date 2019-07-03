import { createReducer } from 'redux-act'
import * as actions from '../actions/character'

const DEFAULT_STATE = {
    characters: [],
    fecthing: false,
    page: 0,
    allPagesLoaded: false
}

export default createReducer({
    [actions.nextPageReceiving]: (state) => ({
        ...state,
        fecthing: true
    }),
    [actions.nextPageReceived]: (state, payload) => {
        const currentPage = state.page + 1;
        const nextPage = currentPage + 1;
        return {
            ...state,
            characters: [...state.characters, ...payload.results],
            page: currentPage,
            fecthing: false,
            allPagesLoaded: nextPage > payload.info.pages
        }
    },
    [actions.movingOutOfCharacterListPage]: (state, payload) => ({
        ...DEFAULT_STATE
    })    
}, DEFAULT_STATE);