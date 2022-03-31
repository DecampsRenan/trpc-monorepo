import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import { createRouter } from "./createRouter";
import { createContext } from "./context";
import { postsRouter } from "./router/post";

// root router to call
export const appRouter = createRouter().merge("post.", postsRouter);

export type AppRouter = typeof appRouter;

async function main() {
  // express implementation
  const app = express();

  app.use(cors());

  app.use((req, _res, next) => {
    // request logger
    console.log("⬅️ ", req.method, req.path, req.body ?? req.query);
    next();
  });

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  app.listen(2021, () => {
    console.log("listening on port 2021");
  });
}

main();
