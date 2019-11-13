import {
  pipe, then, curry, pick,
} from 'ramda'

const tryCatch = curry(async (_fn, _catch, _req, _res, _next) => {
  try {
    return _fn(_req, _res, _next)
  } catch (err) {
    return _catch(err, _req, _res, _next)
  }
})

const sendSuccess = (res) => ({ code, message, data }) => res.status(code).json({ data, message })

const sendError = (next, req, res) => (error) => next(
  {
    code: 500,
    message: error.message,
    data: error,
  },
  req,
  res,
)

export const success = (data = {}, message = 'success', code = 200) => ({
  code,
  message,
  data,
})

export const error = (data = {}, message = 'error', code = 500) => ({
  code,
  message,
  data,
})

export const wrap = (fn) => tryCatch(
  async (req, res) => pipe(
    fn,
    then(pick(['code', 'message', 'data'])),
    then(sendSuccess(res)),
  )(req, res),
  async (err, req, res, next) => sendError(next, req, res)(err),
)
