import * as winston from 'winston'

export default new winston.Logger({
  transports: [
    new winston.transports.Console({
      name: 'mutator-io-logger',
      colorize: true
    })
  ]
})
