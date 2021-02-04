const PORT = process.env.PORT || 4000
const app = require('express')()
const morgan = require('morgan')

if (process.env.NODE_ENV !== "test") {
  app.use(morgan('dev'))
}
app.use('/lists', require('./routers/lists'))

if (require.main === module) {
  app.listen(PORT, (err) => {
    if (err) {
      throw err
    } else {
      console.clear()
      console.log(`Server listening on port ${PORT}`)
    }
  })
}

module.exports = app
