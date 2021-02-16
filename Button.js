import React from 'react';
import './Button.css';

const Button = ({buttonDisplayName, clickHandler}) => (
  <button className = 'Button' id = 'new-quote' onClick = {clickHandler}>{buttonDisplayName}</button>

);


export default Button;
