import { z } from "zod";
import { PrismaClient } from 'db';

const db = new PrismaClient();

import { createRouter } from "../createRouter";

export const postsRouter = createRouter()
  .mutation("create", {
    input: z.object({
      title: z.string(),
    }),
    resolve: async ({ input }) => {
      console.log({ input });
      try {

        await db.post.create({
          data: {
            title: input.title
          }
        })
      } catch (error) {
        console.error("Cannot create post", error)
      }
    },
  })
  .query("list", {
    resolve: async () => {
      return await db.post.findMany();
    },
  });
