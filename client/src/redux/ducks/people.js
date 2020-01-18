import {all, put, call, takeEvery, delay, fork, spawn, cancel, cancelled, race, take} from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'
import {appName} from '../../config'
import {OrderedMap, Record} from 'immutable'
import apiService from '../../services/api'
import {arrToMap} from "../../services/utils";

/**
 * Constants
 * */
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`

export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`
export const ADD_PERSON_START = `${prefix}/ADD_PERSON_START`
export const ADD_PERSON_SUCCESS = `${prefix}/ADD_PERSON_SUCCESS`

export const FETCH_PEOPLE_REQUEST = `${prefix}/FETCH_PEOPLE_REQUEST`
export const FETCH_PEOPLE_START = `${prefix}/FETCH_PEOPLE_START`
export const FETCH_PEOPLE_SUCCESS = `${prefix}/FETCH_PEOPLE_SUCCESS`
export const FETCH_PEOPLE_ERROR = `${prefix}/FETCH_PEOPLE_ERROR`

export const REALTIME_PEOPLE_UPDATE = `${prefix}/REALTIME_PEOPLE_UPDATE`
/**
 * Reducer
 * */
export const ReducerRecord = Record({
    entities: OrderedMap({}),
    loading: false,
    loaded: false
})

export const PersonRecord = Record({
    id: null,
    firstName: null,
    lastName: null,
    email: null
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action

    switch (type) {
        case FETCH_PEOPLE_START:
            return state.set('loading', true)

        case REALTIME_PEOPLE_UPDATE:
        case FETCH_PEOPLE_SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(payload.people, PersonRecord))
        default:
            return state
    }
}

/**
 * Selectors
 * */

export const peopleListSelector = (state) => state[moduleName].entities.valueSeq().toArray()

/**
 * Action Creators
 * */

export const addPerson = ({ firstName, lastName, email }) => ({
    type: ADD_PERSON_REQUEST,
    payload: { firstName, lastName, email }
})

export const fetchPeople = () => ({
    type: FETCH_PEOPLE_REQUEST
})

/**
 * Sagas
 * */

export const addPersonSaga = function * ({ payload }) {
    yield put({
        type: ADD_PERSON_START
    })

    yield call(apiService.addPerson, payload)

    yield put({
        type: ADD_PERSON_SUCCESS
    })
}

export const fetchPeopleSaga = function * () {
    yield put({
        type: FETCH_PEOPLE_START
    })

    try {
        const people = yield call(apiService.fetchPeople)

        yield put({
            type: FETCH_PEOPLE_SUCCESS,
            payload: {people}
        })
    } catch (error) {
        yield put({
            type: FETCH_PEOPLE_ERROR,
            error
        })
    }
}

export const syncPeopleWithPolling = function * () {
    try {
//    let count = 0
        while (true) {
//        if (count++ >= 3) throw new Error('some network error')
            yield call(fetchPeopleSaga)
            yield delay(2000)
        }
    } finally {
        if (yield cancelled()) {
            console.log('---', 'saga has been cancelled')
        }
    }
}

export const cancalableSyncSaga = function *() {
    yield race({
        sync: syncPeopleWithPolling(),
        timeout: delay(5000),
        // stopButtonClicked: stopBtnWatcher()
        // routeChanged: routeWatcher()
    })
/*
    const process = yield fork(syncPeopleWithPolling)
    yield delay(5000)
    yield cancel(process)
*/
}

const createEventChannel = () => eventChannel(apiService.onPeopleChange)

export const realtimeSyncSaga = function * () {
    const chanel = yield call(createEventChannel)

    while (true) {
        const people = yield take(chanel)

        yield put({
            type: REALTIME_PEOPLE_UPDATE,
            payload: { people }
        })
    }
}

export function* saga() {
    yield spawn(realtimeSyncSaga)
//    yield spawn(takeEvery, ADD_PERSON_REQUEST, addPersonSaga)

    yield all([
//        syncPeopleWithPolling(),
        takeEvery(ADD_PERSON_REQUEST, addPersonSaga),
//        takeEvery(FETCH_PEOPLE_REQUEST, fetchPeopleSaga),
    ])
}
