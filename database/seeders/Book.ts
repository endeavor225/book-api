import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Book from 'App/Models/Book'
import User from 'App/Models/User';


export default class extends BaseSeeder {
  public async run () {
    const user = await User.query().select('id').first()

    await Book.createMany([
      {
        title: "Le Petit Prince",
        cover: "https://example.com/le-petit-prince.jpg",
        resume: "Un pilote perdu dans le désert rencontre un petit prince venu d'une autre planète.",
        author: "Antoine de Saint-Exupéry",
        userId: user?.id
      },
      {
        title: "1984",
        cover: "https://example.com/1984.jpg",
        resume: "Dans une société dystopique sous la surveillance constante de Big Brother, Winston Smith lutte pour sa liberté.",
        author: "George Orwell",
        userId: user?.id
      },
      {
        title: "Harry Potter à l'école des sorciers",
        cover: "https://example.com/harry-potter.jpg",
        resume: "Un jeune garçon découvre qu'il est un sorcier et part étudier à l'école de sorcellerie de Poudlard.",
        author: "J.K. Rowling",
        userId: user?.id
      },
      {
        title: "Le Meilleur des mondes",
        cover: "https://example.com/le-meilleur-des-mondes.jpg",
        resume: "Dans une société futuriste, les humains sont conditionnés dès la naissance pour servir un ordre social immuable.",
        author: "Aldous Huxley",
        userId: user?.id
      },
      {
        title: "Les Misérables",
        cover: "https://example.com/les-miserables.jpg",
        resume: "L'histoire épique de la lutte de Jean Valjean pour la rédemption et la justice dans la France du XIXe siècle.",
        author: "Victor Hugo",
        userId: user?.id
      }
    ])
  }
}
