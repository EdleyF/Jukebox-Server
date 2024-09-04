/**
 * @module lib
 * @description External library managers.
 *
 * Use this directory to create proxy classes and functions for libraries like Axios,
 * Kafka, etc. This will aid in keeping the codebase safe against deprecation.
 */
export * from './kafka'
export * from './logger'
export * from './socket-io'
