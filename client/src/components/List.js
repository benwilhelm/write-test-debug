import React from 'react'

const List = ({ list }) => {

  const cards = list.cards || []

  return (
    <div className="list">
      <h3 className="list-title">{list.title}</h3>
      <div className="cards">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <h4 className="card-title">{card.title}</h4>
            <div className="description">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
