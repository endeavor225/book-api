import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'

export default class BookController {
  public async index({}: HttpContextContract) {
    /* return Book.all() */
    return Book.query()
    .preload('user', (u) => u.select('firstname', 'email'))
    .preload('categories', (u) => u.select('id', 'name'))
    .select('title', 'author', 'user_id', 'id')
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({request}: HttpContextContract) {
    return Book.findOrFail(request.params().id)
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
