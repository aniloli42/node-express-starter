import { z } from 'zod'

const EnvSchema = z.object({
	PORT: z.coerce.number().positive().nonnegative().default(8000)
})

export const env = EnvSchema.parse(process.env)
