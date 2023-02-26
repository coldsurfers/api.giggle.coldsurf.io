import { RouteHandler } from 'fastify'

export const findArtistByIdHandler: RouteHandler<{
  Params: { id: string }
}> = async (req, rep) => rep.status(200).send()
