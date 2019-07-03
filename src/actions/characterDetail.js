import { createAction } from 'redux-act'

export const characterDetailPageOpened = createAction();
export const characterDetailPageLoading = createAction();
export const characterDetailInfoReceived = createAction();
export const movingOutOfDetailPage = createAction();