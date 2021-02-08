const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res, next) => {
  const include = req.query.include
  const lists = [...db.get('lists').value()]

  if (include === "cards") {
    const cards = [...db.get('cards').value()]

    cards.forEach(card => {
      const list = lists.find(list => list.id === card.listId)
      list.cards = list.cards || []
      list.cards.push(card)
    })
  }

  res.json(lists)
})

module.exports = router
