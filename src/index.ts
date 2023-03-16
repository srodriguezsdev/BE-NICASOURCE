import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { sequelize } from './config/database'
import creatorRouter from './routes/creator'
import videoRouter from './routes/video'
import { env } from './utils/environment'

dotenv.config()

const app: Express = express()
const port = env.port

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/creator', creatorRouter)
app.use('/video', videoRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Nicasource BE server')
})

app.listen(port, () => {
  console.log('⚡️[server]: server is running')
  sequelize
    .authenticate()
    .then(() => {
      console.log('database connected')
    })
    .catch((e: Error) => {
      console.log(e, 'error connecting database')
    })
})
