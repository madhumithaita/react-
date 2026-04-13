import React from 'react'
import './Button.scss'
const Button = ({text,clickHandler}) => {
  return (
    <button type="button" onClick={clickHandler}>{text}</button>
  )
}

export default Button