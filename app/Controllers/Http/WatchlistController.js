'use strict'

const SerieUserController = use('App/Controllers/Http/SerieUserController')

class WatchlistController extends SerieUserController {
  constructor() {
    super('watchlist')
  }

  async index (config) {
    return this._index(config)
  }

  async store (config) {
    return this._store(config)
  }
}

module.exports = WatchlistController
