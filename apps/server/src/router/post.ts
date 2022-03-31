import { z } from "zod";

import { createRouter } from "../createRouter";

export const postsRouter = createRouter()
  .mutation("create", {
    input: z.object({
      title: z.string(),
    }),
    resolve: ({ input }) => {
      // ..
      return {
        id: "xxxx",
        ...input,
      };
    },
  })
  .query("list", {
    resolve() {
      // ..
      return [
        { id: 1, name: "toto" },
        { id: 2, name: "toto" },
      ];
    },
  });
