'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Serie extends Model {
  users() {
    return this
      .belongsToMany('App/Models/User')
      .pivotModel('App/Model/SerieUser')
  }
}

module.exports = Serie
