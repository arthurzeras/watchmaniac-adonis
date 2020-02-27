'use strict'

const User = use('App/Models/User')
const Serie = use('App/Models/Serie')
const SerieUser = use('App/Models/SerieUser')

class SerieUserController {
  async watchlistIndex ({ request, auth, response }) {
    try {
      const { id } = await auth.getUser()
      const user = await User.find(id)

      const data = await user.series().fetch()

      return response.status(200).send(data)
    } catch(error) {
      return response.status(500).send({
        error: 'Sorry, it was not possible to list watchlist.'
      })
    }
  }

  async addWatchlist ({ request, auth, response }) {
    try {
      const { serie_id } = request.all()
      const { id: user_id } = await auth.getUser()

      const item = await SerieUser.create({
        serie_id, user_id, type: 'watched'
      })

      return response.status(200).send(item)
    } catch(error) {
      return response.status(500).send({
        error: 'Sorry, it was not possible to add serie on watchlist.'
      })
    }
  }
}

module.exports = SerieUserController
