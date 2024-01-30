import { error } from "console";
import fastify from "fastify";

const app = fastify();

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("app running");
  })
  .catch(() => {
    console.error("Error in starting server", error);
  });
