'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SerieUser extends Model {
  users() {
    return this.belongsToMany('App/Models/User')
  }

  series() {
    return this.hasMany('App/Models/Serie')
  }
}

module.exports = SerieUser
