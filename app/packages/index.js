import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import LogAndResponseErrorHandler from './core/http/errorHandlers/LogAndResponse'
import defaultRoutes from './default/routes'

export const middlewares = [
  logger('dev'),
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(),
  express.static(path.join(__dirname, 'public')),
]

export const routes = [
  // keep this first
  defaultRoutes,
]

export const errorHandlers = [
  // keep this last
  LogAndResponseErrorHandler,
]

export default {
  configureRoutes(app) {
    routes.map((route) => app.use('/', route))
  },
  configureMiddlewares(app) {
    middlewares.map((middleware) => app.use(middleware))
  },
  configureErrorHandlers(app) {
    errorHandlers.map((handler) => app.use(handler))
  },
}
