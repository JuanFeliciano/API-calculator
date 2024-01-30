import { error } from "console";
import fastify from "fastify";
import { prisma } from "./prisma";

const app = fastify();

app.post("/sum", async (req, res) => {
  try {
    const { numberone } = (await req.body) as {
      numberone: number;
    };
    const { numbertwo } = (await req.body) as {
      numbertwo: number;
    };

    await prisma.resultado.create({
      data: {
        resultado: numberone + numbertwo,
      },
    });

    const result = await prisma.resultado.findFirst({
      orderBy: {
        id: "desc",
      },
    });

    await prisma.valorOne.create({
      data: {
        numberone,
      },
    });
    await prisma.valorTwo.create({
      data: {
        numbertwo,
      },
    });

    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

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
