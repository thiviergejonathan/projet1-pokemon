import React from 'react'
import Carte from '../carte/Carte'
import Image from '../image/Image'
import Nom from '../nom/Nom'
import Habilete from '../habilete/Habilete'

const Cartes = () => {
  return (
    <div>
        <Carte>
            <Image src="0001Bulbasaur.png"></Image>
            <Nom>Bulbasaur</Nom>
            <Habilete>Tackle</Habilete>
            <Habilete>Growl</Habilete>
        </Carte>
        <Carte>
            <Image src="0004Charmander.png"></Image>
            <Nom>Charmander</Nom>
            <Habilete>Scratch</Habilete>
            <Habilete>Growl</Habilete>
        </Carte>
    </div>
  )
}

export default Cartes