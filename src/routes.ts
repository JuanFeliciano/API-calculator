import fastify, { FastifyInstance } from "fastify";
import { prisma } from "./prisma";

const app = fastify();
async function UserRoutes(app: FastifyInstance) {
  /* Função de Soma */
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

  app.post("/sub", async (req, res) => {
    try {
      const { numberone } = (await req.body) as {
        numberone: number;
      };
      const { numbertwo } = (await req.body) as {
        numbertwo: number;
      };

      await prisma.resultado.create({
        data: {
          resultado: numberone - numbertwo,
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

  app.post("/mult", async (req, res) => {
    try {
      const { numberone } = (await req.body) as {
        numberone: number;
      };
      const { numbertwo } = (await req.body) as {
        numbertwo: number;
      };

      await prisma.resultado.create({
        data: {
          resultado: numberone * numbertwo,
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

  app.post("/div", async (req, res) => {
    try {
      const { numberone } = (await req.body) as {
        numberone: number;
      };
      const { numbertwo } = (await req.body) as {
        numbertwo: number;
      };

      await prisma.resultado.create({
        data: {
          resultado: numberone / numbertwo,
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
}

export default UserRoutes;
