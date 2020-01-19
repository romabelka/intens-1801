import React, {useState} from 'react'
import {useMutation} from "@apollo/react-hooks";
import renameEventMutation from '../graphql/event-rename-mutation'

function EventTitleForm({ event }) {
    const [title, setTitle] = useState(event.title)
    const [rename, { loading }] = useMutation(renameEventMutation,
        { variables: { id: event.id, title } })

    const handleSubmit = async ev => {
        ev.preventDefault()
        return rename()
    }

    if (loading) return <h2>Renaming...</h2>

    return (
        <form onSubmit={handleSubmit}>
            <input value={title}
                   onChange={(ev) => setTitle(ev.target.value)}
            />
            <button type="submit">rename</button>
        </form>
    )
}

EventTitleForm.propTypes = {
}

export default EventTitleForm
