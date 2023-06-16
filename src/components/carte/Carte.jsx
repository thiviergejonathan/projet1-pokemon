import React from 'react'
import './Carte.css'

const Carte = (props) => {
    const classnames = ["card"];
    if (props.className) classnames.push(props.className);
  
  return (
    <div className={classnames.join(" ")}>{props.children}</div>
  )
}

export default Carte