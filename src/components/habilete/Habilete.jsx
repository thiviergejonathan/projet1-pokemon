import React from 'react'
import './Habilete.css'

const Habilete = (props) => {
  const classnames = ["habilete"];
  if (props.className) classnames.push(props.className);

  return (
      <span className={classnames.join(" ")}>{props.children}</span>
  )
}

export default Habilete