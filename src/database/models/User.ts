export default class User {
    public id!: number
    public createdAt!: Date
    public email!: string
    public password?: string
    public passwordSalt?: string
}