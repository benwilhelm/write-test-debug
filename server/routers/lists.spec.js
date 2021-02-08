const request = require('supertest')
const app = require('../index')

describe("GET /lists", () => {
  test("should return array of lists in db", (done) => {
    request(app)
    .get("/lists")
    .expect(200)
    .end((err, res) => {
      if (err) {
        return done(err)
      }

      try {
        expect(res.body).toEqual([
          {
            "id": 1,
            "title": "List One"
          },{
            "id": 2,
            "title": "List Too!"
          },{
            "id": 3,
            "title": "Also a List!"
          }
        ])
        done()
      } catch (err) {
        done(err)
      }
    })
  })
  test("should embed cards when requested with ?include option", (done) => {
    request(app)
    .get('/lists?include=cards')
    .expect(200)
    .end((err, res) => {
      if (err) return done(err)

      try {
        expect(res.body).toHaveLength(3)
        expect(res.body[0].cards).toHaveLength(1)
        expect(res.body[0].cards[0].id).toEqual(1)
        expect(res.body[0].cards[0].title).toEqual("One Card")
        expect(res.body[1].cards).toHaveLength(1)
        expect(res.body[1].cards[0].id).toEqual(2)
        expect(res.body[1].cards[0].title).toEqual("Another Card")
        expect(res.body[2].cards).toHaveLength(1)
        expect(res.body[2].cards[0].id).toEqual(3)
        expect(res.body[2].cards[0].title).toEqual("Still Another Card")
        done()
      } catch(err) {
        done(err)
      }
    })
  })
})
