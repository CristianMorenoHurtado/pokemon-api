import React from 'react'
import PropTypes from 'prop-types'
import CardListItem from './CardListItem'

const CardList = ({ cards }) => {
    return cards.length > 0 ? (
        <div className="container" id="home">
            <div className="row card__row">
                <ul className="pokemon__card--list">{cards && cards.map(card =>
                    <CardListItem key={card.id} card={card} />
                )}</ul>
            </div>
        </div>

    ) : (
        <div className="row loading">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
        </div>
    )

}

CardList.propTypes = {
    cards: PropTypes.array
}

export default CardList
