import { createReducer } from 'redux-act'
import * as actions from '../actions/characterDetail'

const DEFAULT_STATE = {
    loading: false,
    detail: null
}

export default createReducer({
    [actions.characterDetailPageLoading]: (state, payload) => ({
        ...state,
        loading: true
    }),
    [actions.characterDetailInfoReceived]: (state, { characterDetails, characterEpisodes }) => ({
        ...state,
        loading: false,
        detail: {
            character: characterDetails,
            episodes: characterEpisodes
        }
    }),
    [actions.movingOutOfDetailPage]: (state, payload) => ({
        ...DEFAULT_STATE
    })
}, DEFAULT_STATE)