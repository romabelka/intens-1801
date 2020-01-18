import React, { Component } from 'react'
import {connect} from 'react-redux'
import {peopleListSelector, fetchPeople} from "../../redux/ducks/people";

export class PeopleList extends Component {
    static propTypes = {

    }

    state = {
        selectedId: null
    }

    componentDidMount() {
        this.props.fetchPeople()
    }

    select = (id) => () => this.setState(() => ({
        selectedId: id
    }))

    render() {
        return (
            <ul>
                {
                    this.props.people.map(person => (
                        <li key={person.id} data-test="people-list-item"
                            className={this.state.selectedId === person.id ? 'active-item' : ''}
                            onClick = {this.select(person.id)}
                        >
                            {person.email}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default connect(state => ({
    people: peopleListSelector(state)
}), { fetchPeople })(PeopleList)
