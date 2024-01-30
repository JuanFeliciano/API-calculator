import { PrismaClient } from "@prisma/client";
import { error } from "console";
import fastify from "fastify";
import UserRoutes from "./routes";

const app = fastify();
const prisma = new PrismaClient();

UserRoutes(app);

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
