import { createReducer } from 'redux-act'
import * as actions from '../actions/character'

const DEFAULT_STATE = {
    characters: [],
    fecthing: false,
    nextPage: null,
    allPagesLoaded: false
}

export default createReducer({
    [actions.nextPageReceiving]: (state) => ({
        ...state,
        fecthing: true
    }),
    [actions.nextPageReceived]: (state, payload) => {
        return {
            ...state,
            characters: [...state.characters, ...payload.results],
            nextPage: payload.nextPage,
            fecthing: false,
            allPagesLoaded: payload.allPagesLoaded 
        }
    },
    [actions.movingOutOfCharacterListPage]: (state, payload) => ({
        ...DEFAULT_STATE
    })
}, DEFAULT_STATE);