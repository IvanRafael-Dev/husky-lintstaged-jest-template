import express, { Request, Response } from 'express'

import userRouter from './routes/userRouter'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => res.status(200).json({ message: 'ok' }))

app.use(userRouter)

export default app
