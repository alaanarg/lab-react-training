import React from 'react'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const background = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    };

    const last4 = number.slice(-4);

  return (
      <article className="credit-card" style={background} alt="">
          <p>{type}</p>
          <p>•••• •••• •••• •••• {last4}</p>
          <p>Expires {expirationMonth}/{expirationYear}</p>
          <p>{bank}</p>
          <p>{owner}</p>      
      </article>
  )
}

export default CreditCard