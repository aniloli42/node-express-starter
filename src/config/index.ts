import type { CorsOptions } from 'cors'
import { env } from './env'

export default {
	cors: {
		origin: [`http://localhost:${env.PORT}`, `http://127.0.0.1:${env.PORT}`]
	} satisfies CorsOptions
}
