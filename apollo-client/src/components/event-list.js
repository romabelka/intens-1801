import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import allEventsQuery from '../graphql/all-events'
import Event from "./event";

function EventList(props) {
    const { data, loading } = useQuery(allEventsQuery)
    if (loading) return <h1>Loader...</h1>
    return (
        <ul>
            {data.allEvents.map(event => (
                <li key={event.id}><Event event={event}/></li>
            ))}
        </ul>
    )
}

EventList.propTypes = {
}

export default EventList
