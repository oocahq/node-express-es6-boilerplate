import dotenv from 'dotenv'

dotenv.config()

export default {
    isDebugEnabled: process.env.DEBUG_ENABLED || false,
}