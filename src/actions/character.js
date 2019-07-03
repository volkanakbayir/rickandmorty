import { createAction } from 'redux-act'

export const characterListPageOpened = createAction();
export const fetchNextPage = createAction();
export const nextPageReceiving = createAction();
export const nextPageReceived = createAction();
export const movingOutOfCharacterListPage = createAction();
