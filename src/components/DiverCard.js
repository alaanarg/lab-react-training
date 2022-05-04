import React from 'react'
import Rating from './Rating'

const DriverCard = (props) => {
    return (
        <div>
            <img src={props.img} alt="driver" width="60" height="60"/>
            <h3>{props.name}</h3>
            <Rating>{props.rating}</Rating>
            <p> {props.car.model} - {props.car.licensePlate} </p>
        </div>
    )
}

export default DriverCard