import React, { Component } from 'react'
import {connect} from 'react-redux'
import {peopleListSelector, fetchPeople} from "../../redux/ducks/people";

class PeopleList extends Component {
    static propTypes = {

    }

    componentDidMount() {
        this.props.fetchPeople()
    }

    render() {
        return (
            <ul>
                {
                    this.props.people.map(person => (
                        <li key={person.id}>{person.email}</li>
                    ))
                }
            </ul>
        )
    }
}

export default connect(state => ({
    people: peopleListSelector(state)
}), { fetchPeople })(PeopleList)
