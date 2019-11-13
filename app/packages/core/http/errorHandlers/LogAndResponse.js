export default () => ({
  code = 500,
  message = 'Something went wrong',
  data = {},
}, req, res, next) => {
  console.error({ code, message, data })
  res
    .status(code)
    .json({ code, message, data })
  next({ code, message, data }, req, res)
}
