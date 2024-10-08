import 'dotenv/config'

type nodenv = 'development' | 'production' | 'test' | 'network'

export const NODE_ENV: nodenv = (process.env.NODE_ENV as nodenv) || 'development'

export const LOG_LEVEL = process.env.LOG_LEVEL || 'warn'
export const LOG_NS = process.env.LOG_NS || 'server'

export const KAFKA_BROKERS = process.env.KAFKA_BROKERS?.split(',') ?? ['kafka:9092']
export const KAFKA_GROUP_ID = process.env.KAFKA_GROUP_ID ?? 'jbx-server'
