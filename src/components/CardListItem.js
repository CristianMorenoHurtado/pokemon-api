import React from 'react'
import PropTypes from 'prop-types'

const CardListItem = ({ card }) => {
   
    const pokeDotCom = `https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/?cardName=${card.name || ''}&evolvesFrom=${card.evolvesFrom || ''}&particularArtist=${card.artist || ''}`

    return (
        <li className="card__img--wrapper">
            <a href={pokeDotCom} target="_blank" rel="noopener noreferrer">
                <img src={card.images.small} className="card__img" alt="" ></img>
            </a>
        </li>
    )
}

CardListItem.propTypes = {
    card: PropTypes.object
}

export default CardListItem
