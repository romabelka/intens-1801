import React, {useState} from 'react'
import EventBody from "./event-body";

function Event({ event }) {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            {event.title}
            {isOpen && <EventBody event={event}/>}
            <button onClick={() => setOpen(!isOpen)}>{isOpen ? 'close' : 'open'}</button>
        </div>
    )
}

Event.propTypes = {
}

export default Event
