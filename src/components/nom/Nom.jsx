import React from 'react'
import './Nom.css'
const Nom = (props) => {
  const classnames = ["nom"];
  if (props.className) classnames.push(props.className);

  return (
    <div>
      <span className={classnames.join(" ")}>{props.children}</span>
    </div>
  )
}

export default Nom