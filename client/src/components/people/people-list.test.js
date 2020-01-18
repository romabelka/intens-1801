import React from 'react'
import {mount} from 'enzyme'
import {PeopleList} from './people-list'

const people = [
    {
        id: '123',
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com'
    }, {
        id: '124',
        firstName: 'Test1',
        lastName: 'User1',
        email: 'test1@example.com'
    }
]

describe('PeopleList', () => {
    it('should render a list', () => {
        const component = mount(<PeopleList people={people} fetchPeople={() => {}}/>)

        expect(component.find(`[data-test="people-list-item"]`).length).toEqual(people.length)
    });

    it('should call fetchPeople', () => {
        const fn = jest.fn()
        mount(<PeopleList people={[]} fetchPeople={fn}/>)

        expect(fn.mock.calls.length).toEqual(1)
    });

    it('should select person', () => {
        const component = mount(<PeopleList people={people} fetchPeople={() => {}}/>)

        expect(component.find(`[data-test="people-list-item"]`).at(0).hasClass('active')).toEqual(false)

        component.find(`[data-test="people-list-item"]`).at(0).simulate('click')

        expect(component.find(`[data-test="people-list-item"]`).at(0).hasClass('active')).toEqual(true)

    });
});
