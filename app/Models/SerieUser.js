'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SerieUser extends Model {
  users() {
    return this.belongsTo('App/Models/User')
  }

  series() {
    return this.belongsTo('App/Models/Serie')
  }

  static scopeIsWatchlist(query) {
    return query.where({ type: 'watchlist' })
  }
}

module.exports = SerieUser
