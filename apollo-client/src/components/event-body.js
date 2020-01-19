import React from 'react'
import {useQuery} from "@apollo/react-hooks";
import eventQuery from '../graphql/event'

function EventBody({ event }) {
    const { loading, data } = useQuery(eventQuery, { variables: { id: event.id } })

    if (loading) return <h2>Loading...</h2>

    return (
        <div>
            <h3>{data.event.url}</h3>

            {data.event
                .people
                .map(person => person.email)
                .join(', ')
            }
        </div>
    )
}

EventBody.propTypes = {
}

export default EventBody
