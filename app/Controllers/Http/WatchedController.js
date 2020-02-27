'use strict'

const SerieUserController = use('App/Controllers/Http/SerieUserController')

class WatchedController extends SerieUserController {
  constructor() {
    super('watched')
  }

  async index (config) {
    return this._index(config)
  }

  async store (config) {
    return this._store(config)
  }
}

module.exports = WatchedController
