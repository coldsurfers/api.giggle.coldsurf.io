import { prisma } from '../instance'

export default class User {
  public id!: number

  public createdAt!: Date

  public email!: string

  public password?: string

  public passwordSalt?: string

  public async create() {
    try {
      const user = await prisma.user.create({
        data: {
          email: this.email,
          password: this.password,
          passwordSalt: this.passwordSalt,
        },
      })
      return user
    } catch (e) {
      console.error(e)
      return null
    }
  }
}
