import React from 'react'
import {PeopleList} from './people-list'
import {mount} from "enzyme";

export default (initialProps = {}) => {
    const props = { people: [], fetchPeople: () => {}, ...initialProps}
    const component = mount(<PeopleList {...props} />)

    return {
        get: {
            listItems: () => component.find(`[data-test="people-list-item"]`),
            listItem: (index) => component.find(`[data-test="people-list-item"]`).at(index),
            isItemActive: (index) => component.find(`[data-test="people-list-item"]`).at(index).hasClass('active-item')
        },
        when: {
            itemClicked: (index) => component.find(`[data-test="people-list-item"]`).at(index).simulate('click')
        }
    }
}
