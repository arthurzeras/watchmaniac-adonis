'use strict'

const SerieUser = use('App/Models/SerieUser')

class WatchlistController {
  async index ({ auth, response }) {
    try {
      const { id } = await auth.getUser()

      const data = await SerieUser
        .query()
        .where({ user_id: id })
        .isWatchlist()
        .with('series')
        .fetch()

      const series = data.toJSON().reduce((a, c) => [...a, c.series], [])

      return response.status(200).send({ series })
    } catch(error) {
      return response.status(500).send({
        error: 'Sorry, it was not possible to list watchlist.'
      })
    }
  }

  async store ({ request, auth, response }) {
    try {
      const { serie_id } = request.all()
      const { id: user_id } = await auth.getUser()

      const item = await SerieUser.create({
        serie_id, user_id, type: 'watchlist'
      })

      return response.status(200).send(item)
    } catch(error) {
      return response.status(500).send({
        error: 'Sorry, it was not possible to add serie on watchlist.'
      })
    }
  }
}

module.exports = WatchlistController
