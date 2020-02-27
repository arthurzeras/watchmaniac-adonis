'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SerieSchema extends Schema {
  up () {
    this.create('series', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('image').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('serie')
  }
}

module.exports = SerieSchema
