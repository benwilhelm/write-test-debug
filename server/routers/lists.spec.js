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
    })
  })
})
