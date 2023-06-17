import React from 'react'
import './Habilete.css'
import { useState } from "react"

const Habilete = (props) => {
  const classnames = ["habilete"];
  if (props.className) classnames.push(props.className);
  console.log("classnames: ", classnames);
  return (
      <span className={classnames.join(" ")} >{props.children}</span>
  )
}

export default Habilete