
import * as winston from 'winston'

export default new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      colorize: true
    })
  ]
})
