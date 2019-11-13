import express from 'express'

import { helloWorld, forceError } from './controllers/helloWorld'

export default express
  .Router()
  .get('/', helloWorld)
  .post('/', helloWorld)
  .get('/error', forceError)
