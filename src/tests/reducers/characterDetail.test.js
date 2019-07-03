import * as characterDetailActions from '../../actions/characterDetail'
import characterDetailReducer from '../../reducers/characterDetail'

describe('characterDetail reducers', () => {
    it('should start width a default state', () => {
        const state = characterDetailReducer();
        expect(state).toBeTruthy();
    })

    it('should start width correct default values', () => {
        const state = characterDetailReducer();
        expect(state.loading).toEqual(false);
        expect(state.detail).toEqual(null);
    })

    it('should change loading to true when nextPage loading action triggered', () => {
        const action = characterDetailActions.characterDetailPageLoading();
        const state = characterDetailReducer(undefined, action);
        expect(state.loading).toBe(true);
    })

    it('should change loading to true when nextPage loading action triggered', () => {
        const mock = {
            characterDetails: {
                test: 1
            },
            characterEpisodes: {
                test: 1
            }
        }
        const action = characterDetailActions.characterDetailInfoReceived(mock);
        const state = characterDetailReducer(undefined, action);
        expect(state.detail).toBeTruthy();
        expect(state.detail.character).toBeTruthy();
        expect(state.detail.episodes).toBeTruthy();
        expect(state.detail.character).toBe(mock.characterDetails);
        expect(state.detail.episodes).toBe(mock.characterEpisodes);
    })
})