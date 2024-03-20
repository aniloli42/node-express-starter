import express from 'express'
import { env } from './config/env'

const app = express()

app.get('/', (req, res) => res.send('Hello'))

app.listen(env.PORT, () => console.log(`Server running on PORT: ${env.PORT}`))
