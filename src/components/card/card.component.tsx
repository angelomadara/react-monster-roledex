import React from 'react'
import './card.styles.css'
import { Monster } from '../../App'

type CardProps = {
    monster: Monster
}

export const Card = (props: CardProps) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster"/>
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
)