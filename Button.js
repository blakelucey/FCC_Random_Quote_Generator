import React from 'react'

const Button = ({buttonDisplayName, clickHandler}) => (
  <button id = 'new-quote' onClick = {clickHandler}>{buttonDisplayName}</button>

);


export default Button;
