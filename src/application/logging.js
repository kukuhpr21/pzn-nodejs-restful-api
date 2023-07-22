import winston from "winston";

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'my_log.log' }),
        new winston.transports.Console({})
    ]
});