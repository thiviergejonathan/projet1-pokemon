import React from 'react'
import './Image.css'

const Image = (props) => {
  const classnames = ["image"];
  if (props.className) classnames.push(props.className);

  const imgLink = "src/assets/";

  return (
    <img src={imgLink.concat(props.src)} className={classnames.join(" ")} alt="Image du pokemon" />
  )
}

export default Image