const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res, next) => {
  const lists = db.get('lists').value()
  res.json(lists)
})

module.exports = router
