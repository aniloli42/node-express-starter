import 'dotenv/config'
import express from 'express'
import { env } from '@config/env'
import { logger } from '@lib/logger'

const app = express()

app.get('/', (req, res) => res.send('Hello'))

app.listen(env.PORT, () => logger.info(`Server running on PORT: ${env.PORT}`))
