import * as characterActions from '../actions/character'
import characterReducer from './character'

describe('character reducers', () => {
    it('should start width a default state', () => {
        const state = characterReducer();
        expect(state).toBeTruthy();
    })

    it('should start width empty character list', () => {
        const state = characterReducer();
        expect(state.characters).toBeTruthy();
        expect(state.characters.length).toBe(0);
    })

    it('should change loading to true when nextPage loading action triggered', () => {
        const action = characterActions.nextPageReceiving();
        const state = characterReducer(undefined, action);
        expect(state.fecthing).toBe(true);
    })

    it('should change loading to false when page loaded', () => {
        const mockPayload = {
            results: []
        };
        const action = characterActions.nextPageReceived(mockPayload);
        const state = characterReducer({
            characters: [],
            fecthing: true
        }, action);

        expect(state.fecthing).toEqual(false);
    })

    it('should append to characters state received from payload', () => {
        const mockPayload = {
            results: [{}, {}]
        };
        const action = characterActions.nextPageReceived(mockPayload);
        const state = characterReducer({
            characters: [],
        }, action);
        expect(state.characters.length).toEqual(mockPayload.results.length);

        const action2 = characterActions.nextPageReceived(mockPayload);
        const state2 = characterReducer(state, action2);

        expect(state2.characters.length).toEqual(mockPayload.results.length * 2);
    })

    it('should go back to default state when page left', () => {
        const action = characterActions.movingOutOfCharacterListPage();
        const state = characterReducer(null, action);

        expect(state).toBeTruthy();
        expect(state.characters.length).toEqual(0);
        expect(state.fecthing).toEqual(false);
    })
})
