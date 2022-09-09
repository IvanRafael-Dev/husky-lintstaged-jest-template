import { Request, Response } from 'express'

export default class UserController {
  async add (req: Request, res: Response): Promise<Response> {
    const requiredFields = ['email', 'password', 'username']
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ message: `${field} não informado` })
      }
    }

    return res.status(201).json()
  }
}
