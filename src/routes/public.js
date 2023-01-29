import fastifyStatic from "@fastify/static";
import path from 'path'

export default async function publicRoutes(server) {
  server.register(fastifyStatic, {
    root: path.join(process.cwd(), "/src/public"),
  });

  server.get("/css/base.css", async (request, reply) => {
    console.log(path.join(process.cwd(), "/src/public"));
    return reply.sendFile('base.css')
  });
}
