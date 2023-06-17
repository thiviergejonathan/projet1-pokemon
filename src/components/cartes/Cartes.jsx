import React from 'react'
import Carte from '../carte/Carte'

const Cartes = () => {


  return (
    <div>
        <Carte
          image="0001Bulbasaur.png"
          nom="Bulbasaur"
          habiletes={["Tackle", "Growl"]}
        >
        </Carte>

        <Carte
          image="0004Charmander.png"
          nom="Charmander"
          habiletes={["Scratch", "Growl"]}
        >
        </Carte>

        <Carte
          image="0007Squirtle.png"
          nom="Squirtle"
          habiletes={["Tackle", "Tail Whip"]}
        >
        </Carte>

        <Carte
          image="0012Butterfree.png"
          nom="Butterfree"
          habiletes={["Confusion", "Psybeam"]}
        >
        </Carte>

        <Carte
          image="0025Pikachu.png"
          nom="Pikachu"
          habiletes={["Thunder Shock", "Tail Whip", "Quick Attack"]}
        >
        </Carte>

        <Carte
          image="0027Sandshrew.png"
          nom="Sandshrew"
          habiletes={["Scratch"]}
        >
        </Carte>

        <Carte
          image="0039Jigglypuff.png"
          nom="Jigglypuff"
          habiletes={["Sweet Kiss", "Disarming Voice"]}
        >
        </Carte>

        <Carte
          image="0057Primeape.png"
          nom="Primeape"
          habiletes={["Scratch", "Low Kick"]}
        >
        </Carte>

        <Carte
          image="0062Poliwrath.png"
          nom="Poliwrath"
          habiletes={["Dynamic Punch", "Bubble Beam"]}
        >
        </Carte>

        <Carte
          image="0063Abra.png"
          nom="Abra"
          habiletes={["Teleport"]}
        >
        </Carte>

    </div>
  )
}

export default Cartes