'use strict'

const SerieUser = use('App/Models/SerieUser')

class SerieUserController {
  constructor(pivotType) {
    this.pivotType = pivotType
  }

  async _index ({ auth, response }) {
    try {
      const { id } = await auth.getUser()

      console.log(this.pivotType)

      const conditional = this.pivotType === 'watchlist' ? 'isWatchlist' : 'isWatched'

      const data = await SerieUser
        .query()
        .where({ user_id: id })
        [conditional]()
        .with('series')
        .fetch()

      const series = data.toJSON().reduce((a, c) => [...a, c.series], [])

      return response.status(200).send({ series })
    } catch(error) {
      return response.status(500).send({
        error: `Sorry, it was not possible to list ${this.pivotType}.`
      })
    }
  }

  async _store ({ request, auth, response }) {
    try {
      const { serie_id } = request.all()
      const { id: user_id } = await auth.getUser()

      const item = await SerieUser.create({
        serie_id, user_id, type: this.pivotType
      })

      return response.status(200).send(item)
    } catch(error) {
      return response.status(500).send({
        error: `Sorry, it was not possible to add serie on ${this.pivotType}.`
      })
    }
  }
}

module.exports = SerieUserController
