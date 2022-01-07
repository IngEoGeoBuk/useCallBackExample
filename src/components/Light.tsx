import React from 'react'

interface Light {
    room: string,
    on: boolean,
    toggle(): void 
}

const Light = ({ room, on, toggle } : Light) => {
    console.log({ room, on });
    return (
        <button onClick={toggle}>
            {room} {on ? "💡" : "⬛"}
        </button>
    )
}

export default React.memo(Light)
