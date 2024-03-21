import { Router } from 'express'

const router = Router()

router.get('/', (_, res) => res.send('Welcome to demo v1 api'))

export default router
