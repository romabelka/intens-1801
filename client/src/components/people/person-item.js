import React from 'react'
import {useDrag, useDrop} from 'react-dnd'

function PersonItem({ person: { id, email, firstName } }) {
    const [{ isDragging }, ref] = useDrag({
        item: {
            type: 'person',
            id
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    return (
        <div style={{ opacity: isDragging ? 0.5 : 1 }}>
            {email}
            <div ref={ref}>{firstName}</div>
        </div>
    )
}

PersonItem.propTypes = {
}

export default PersonItem
