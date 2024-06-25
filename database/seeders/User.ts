import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {firstname : "Jane", lastname : "Does", email : "jane@gmail.com", password : "azertyui"},
      {firstname : "Martin", lastname : "Does", email : "martin@gmail.com", password : "azertyui"}
    ])
  }
}
