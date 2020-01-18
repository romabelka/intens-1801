import {put, call} from 'redux-saga/effects'
import {
    addPersonSaga,
    ADD_PERSON_SUCCESS,
    ADD_PERSON_START,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_START,
    addPerson, fetchPeopleSaga, FETCH_PEOPLE_ERROR
} from './people'
import apiService from "../../services/api";

describe('People Duck', () => {
    describe('Saga', () => {
        describe('Add Person', () => {
            it('should add a person', () => {
                const person = {
                    firstName: 'Test',
                    lastName: 'User',
                    email: 'test@example.com'
                }
                const action = addPerson(person)

                const saga = addPersonSaga(action)

                expect(saga.next().value).toEqual(put({
                    type: ADD_PERSON_START
                }))

                //dispatching action

                expect(saga.next().value).toEqual(call(apiService.addPerson, person))

                //const data = await apiService.addPerson()

                expect(saga.next().value).toEqual(put({
                    type: ADD_PERSON_SUCCESS
                }))
            });
        });
        describe('Fetch People', () => {

            it('should fetch people', () => {

                const saga = fetchPeopleSaga()

                expect(saga.next().value).toEqual(put({
                    type: FETCH_PEOPLE_START
                }))

                //dispatching action

                expect(saga.next().value).toEqual(call(apiService.fetchPeople))

                //const data = await apiService.fetchPeople()

                const people = [{
                    id: '123',
                    firstName: 'Test',
                    lastName: 'User',
                    email: 'test@example.com'
                }, {
                    id: '124',
                    firstName: 'Test1',
                    lastName: 'User1',
                    email: 'test1@example.com'
                }]

                expect(saga.next(people).value).toEqual(put({
                    type: FETCH_PEOPLE_SUCCESS,
                    payload: { people }
                }))
            });

            it('should dispatch error', () => {

                const saga = fetchPeopleSaga()

                expect(saga.next().value).toEqual(put({
                    type: FETCH_PEOPLE_START
                }))

                //dispatching action

                expect(saga.next().value).toEqual(call(apiService.fetchPeople))

                //const data = await apiService.fetchPeople()

                const error = new Error('some error')

                expect(saga.throw(error).value).toEqual(put({
                    type: FETCH_PEOPLE_ERROR,
                    error
                }))
            });
        });
    });
});
