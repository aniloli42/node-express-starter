import 'dotenv/config'
import compression from 'compression'
import helmet from 'helmet'
import express from 'express'
import { env } from '@config/env'
import { logger } from '@lib/logger'
import v1Router from '@modules/v1/main.router'
import cors from 'cors'
import config from '@config'

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors(config.cors))
app.use(express.json())
app.get('/', (_, res) => res.send('Welcome'))
app.use('/api/v1', v1Router)

app.listen(env.PORT, () => logger.info(`Server running on PORT: ${env.PORT}`))
