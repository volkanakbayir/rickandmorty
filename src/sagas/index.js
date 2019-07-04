import { takeLatest } from 'redux-saga/effects'

import * as characterActions from '../actions/character'
import * as characterSagas from './character';

import * as characterDetailActions from '../actions/characterDetail'
import * as characterDetailSagas from './characterDetail';

/**
 * This function is matching sagas with their corresponding actions by their name equality.
 */
export default function* saga() {
    const relations = [
        [characterActions, characterSagas],
        [characterDetailActions, characterDetailSagas],
    ]

    for (const [actions, sagas] of relations) {
        for (const [actionName, action] of Object.entries(actions)) {
            const saga = sagas[actionName]
            if (saga) yield takeLatest(action.getType(), saga)
        }
    }
}