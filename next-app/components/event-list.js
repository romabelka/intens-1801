import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import Link from 'next/link'
import allEventsQuery from '../graphql/all-events'

function EventList(props) {
    const { data, loading } = useQuery(allEventsQuery)
    if (loading) return <h1>Loader...</h1>
    return (
        <ul>
            {data.allEvents.map(event => (
                <li key={event.id}>
                    <Link href={`/event?id=${event.id}`} as={`/event/${event.id}`}>
                        <a>
                            {event.title}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

EventList.propTypes = {
}

export default EventList
