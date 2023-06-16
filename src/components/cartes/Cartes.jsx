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
        <Carte>
            <Image src="0007Squirtle.png"></Image>
            <Nom>Squirtle</Nom>
            <Habilete>Tackle</Habilete>
            <Habilete>Tail Whip</Habilete>
        </Carte>
        <Carte>
            <Image src="0012Butterfree.png"></Image>
            <Nom>Butterfree</Nom>
            <Habilete>Confusion</Habilete>
            <Habilete>Psybeam</Habilete>
        </Carte>
        <Carte>
            <Image src="0025Pikachu.png"></Image>
            <Nom>Pikachu</Nom>
            <Habilete>Thunder Shock</Habilete>
            <Habilete>Tail Whip</Habilete>
            <Habilete>Quick Attack</Habilete>
        </Carte>
        <Carte>
            <Image src="0027Sandshrew.png"></Image>
            <Nom>Sandshrew</Nom>
            <Habilete>Scratch</Habilete>
        </Carte>
        <Carte>
            <Image src="0039Jigglypuff.png"></Image>
            <Nom>Jigglypuff</Nom>
            <Habilete>Sweet Kiss</Habilete>
            <Habilete>Disarming Voice</Habilete>
        </Carte>
        <Carte>
            <Image src="0057Primeape.png"></Image>
            <Nom>Primeape</Nom>
            <Habilete>Scratch</Habilete>
            <Habilete>Low Kick</Habilete>
        </Carte>
        <Carte>
            <Image src="0062Poliwrath.png"></Image>
            <Nom>Poliwrath</Nom>
            <Habilete>Dynamic Punch</Habilete>
            <Habilete>Bubble Beam</Habilete>
        </Carte>
        <Carte>
            <Image src="0063Abra.png"></Image>
            <Nom>Abra</Nom>
            <Habilete>Teleport</Habilete>
        </Carte>
    </div>
  )
}

export default Cartes