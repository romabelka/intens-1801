import React from 'react'
import {useDrop} from 'react-dnd'
import {useDispatch} from "react-redux";
import {deletePerson} from "../../redux/ducks/people";

function TrashCan() {
    const dispatch = useDispatch();
    const [{ canDrop, isOver }, ref] = useDrop({
        accept: 'person',
        drop: ({ id }) => dispatch(deletePerson(id)),
        collect: (monitor) => ({
            canDrop: monitor.canDrop(),
            isOver: monitor.isOver()
        })
    })

    const borderColor = isOver
        ? 'red'
        : canDrop
            ? 'green'
            : 'black'

    return (
        <div style={{
            width: 200,
            height: 200,
            position: 'fixed',
            top: 0,
            right: 0,
            border: `1px solid ${borderColor}`
        }}
        ref = {ref}
        >
            Trash
        </div>
    )
}

TrashCan.propTypes = {
}

export default TrashCan
