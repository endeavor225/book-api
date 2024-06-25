import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run () {
    await Category.createMany([
      {name: "Science-Fiction"},
      {name: "Fiction"},
      {name: "Fantasy"},
      {name: "Biographie"},
      {name: "Histoire"},
      {name: "Science"},
      {name: "Romance"},
      {name: "Mystère"},
      {name: "Aventure"},
      {name: "Poésie"},
      {name: "Essai"},
      {name: "Drame"},
      {name: "Philosophie"},
      {name: "Psychologie"},
      {name: "Religion"},
      {name: "Humour"},
      {name: "Thriller"},
      {name: "Autobiographie"},
      {name: "Enfant"},
      {name: "Art"}
    ])
  }
}
