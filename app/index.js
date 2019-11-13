import express from 'express'
import packages from './packages'

export const createApp = () => {
  const app = express()

  packages.configureMiddlewares(app)
  packages.configureRoutes(app)
  packages.configureErrorHandlers(app)

  return app
}

export default createApp
