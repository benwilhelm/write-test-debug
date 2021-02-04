const low = require('lowdb')
const yaml = require('js-yaml')
const fs = require('fs')
const Memory = require('lowdb/adapters/Memory')

const seedData = yaml.load(fs.readFileSync(`${__dirname}/seed.yml`))

const db = low(new Memory())
db.defaults(seedData).write()

module.exports = db
