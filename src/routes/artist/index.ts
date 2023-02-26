import { FastifyPluginCallback } from 'fastify'
import { findArtistByIdHandler } from './handlers'

const artistRoute: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/:id', findArtistByIdHandler)
  done()
}

export default artistRoute
