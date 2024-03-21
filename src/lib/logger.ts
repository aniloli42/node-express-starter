import { createLogger, transports, format } from 'winston'

const logFormat = format.combine(
	format.timestamp({ format: 'ddd DD-MM-YYYY hh:mm:ss A' }),
	format.printf(
		(info) =>
			`[${info.timestamp}] - [${info.level.toUpperCase()}] - ${info.message}`
	)
)

export const logger = createLogger({
	level: 'info',
	format: logFormat,
	transports: [
		new transports.Console(),
		new transports.File({
			filename: 'app.log'
		})
	]
})
