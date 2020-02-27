'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SerieUserSchema extends Schema {
  up () {
    this.create('serie_users', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('serie_id').unsigned().references('id').inTable('series').onUpdate('CASCADE').onDelete('CASCADE')
      table.enu('type', ['watchlist', 'watched']).defaultTo('watchlist')
      table.timestamps()
    })
  }

  down () {
    this.drop('serie_users')
  }
}

module.exports = SerieUserSchema
