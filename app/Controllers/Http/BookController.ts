import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'
import StoreBookValidator from 'App/Validators/StoreBookValidator'
import UpdateBookValidator from 'App/Validators/UpdateBookValidator';
import Drive from '@ioc:Adonis/Core/Drive'

export default class BookController {
  public async index({}: HttpContextContract) {
    /* return Book.all() */
    return Book.query()
    .preload('user', (u) => u.select('firstname', 'email'))
    .preload('categories', (u) => u.select('id', 'name'))
    //.select('title', 'author', 'user_id', 'id')
  }

  public async create({}: HttpContextContract) {}

  public async store({auth, request, response}: HttpContextContract) {
    const payload = await request.validate(StoreBookValidator)
    await payload.cover.moveToDisk('./')
    const fileName = payload.cover.fileName

    const book = await Book.create({
      title: payload.title,
      resume: payload.resume,
      cover: fileName,
      author: payload.author,
      userId: auth.user?.id,
    })

    await book.related('categories').attach(payload.categories)
    return response.status(201).json("Book created")
  }

  public async show({request}: HttpContextContract) {
    return Book.findOrFail(request.params().id)
  }

  public async edit({}: HttpContextContract) {}

  public async update({bouncer, request, response}: HttpContextContract) {
    const payload = await request.validate(UpdateBookValidator)
    const book = await Book.findOrFail(request.params().id)

    // authorize
    await bouncer.with('BookPolicy').authorize('delete', book)

    let fileName: any
    if (payload.cover) {
      await Drive.delete(book.cover)
      await payload.cover.moveToDisk('./')
      fileName = payload.cover.fileName
    }

    const updatedBook = await book.merge({
      title: payload.title,
      resume: payload.resume,
      cover: fileName,
      author: payload.author,
    }).save()

    await updatedBook.related('categories').sync(payload.categories)
    return response.status(200).json("Book updated !!")
  }

  public async destroy({bouncer, request, response}: HttpContextContract) {
    const book = await Book.findOrFail(request.params().id)
     // authorize
    await bouncer.with('BookPolicy').authorize('delete', book)

    await Drive.delete(book.cover)
    await book.related('categories').detach()
    await book.delete()
    return response.status(200).json("Book deleted !!")
  }
}
