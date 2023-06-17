import React from 'react'
import './Carte.css'
import Image from '../image/Image'
import Nom from '../nom/Nom'
import Habilete from '../habilete/Habilete'
import { useState } from "react";

const Carte = (props) => {
    const classnames = ["card"];
    if (props.className) classnames.push(props.className);

    const [hideSkills, setHideSkills] = useState("hideSkills");

    const onMouseEnter = () => {
      setHideSkills("");
    };

    const onMouseLeave = () => {
      setHideSkills("hideSkills");
    };
    
  return (
    <div className={classnames.join(" ")} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Image src={props.image}></Image>
      <Nom>{props.nom}</Nom>
      {props.habiletes.map((habilete, index) => (
        <Habilete key={index} className={hideSkills}>{habilete}</Habilete>
      ))}
    </div>
  )
}

export default Carte