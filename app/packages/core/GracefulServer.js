const { createTerminus } = require('@godaddy/terminus')

const onSignal = async () => {
  console.log('server is starting cleanup')
}

const onShutdown = async () => {
  console.log('cleanup finished, server is shutting down')
}

const healthCheck = async () => {
  console.log('running health check...')
}

export const createGracefulServer = (server) => {
  createTerminus(server, {
    healthChecks: {
      '/_healthcheck': healthCheck,
    },

    timeout: 30 * 1000,
    signals: ['SIGINT', 'SIGTERM'],
    onSignal,
    onShutdown,
  })
}

export default createGracefulServer
