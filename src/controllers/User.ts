import { Request, Response } from 'express'

export default class UserController {
  async add (req: Request, res: Response): Promise<Response> {
    if (!req.body.email) {
      return res.status(400).json({ message: 'Email não informado' })
    }
    return res.status(200)
  }
}
