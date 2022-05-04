import React from 'react'
import Greetings from './Greetings'
import Random from './Random'

const IdCard = ({ picture, firstName, lastName, gender, height, birth, lang}) => {

  return (
      <article className="idCardClass" alt="">
          <img src={picture} />
          <p>First name: {firstName}</p>
          <p>Last name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>height: {height}</p>
          <p>Birth: {birth.toLocaleString()}</p>
          <Greetings lang = {lang}>{firstName}</Greetings>
          <Random min={1} max={100}></Random>
      
      </article>
  )
}

export default IdCard