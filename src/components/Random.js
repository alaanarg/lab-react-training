import React from 'react'

const Random = (props) => {

    const rndInt = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)


    return (
        <div>
            <p>Random Lucky Number = {rndInt}</p>
        </div>
    )
}

export default Random