import React from 'react'
import PeopleList from './people-list'
import {mount} from "enzyme";
import {Provider} from "react-redux";
import createStore from '../../redux';

export default (initialProps = {}) => {
    const component = mount(
        <Provider store={createStore()}>
            <PeopleList {...initialProps} />
        </Provider>
    )

    return {
        get: {
            listItems: () => component.find(`[data-test="people-list-item"]`),
            listItem: (index) => component.find(`[data-test="people-list-item"]`).at(index),
            isItemActive: (index) => component.find(`[data-test="people-list-item"]`).at(index).hasClass('active-item')
        },
        when: {
            itemClicked: (index) => component.find(`[data-test="people-list-item"]`).at(index).simulate('click')
        },
        update: () => component.update()
    }
}
