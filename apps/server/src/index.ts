import { EventEmitter } from 'events';
import express from 'express';
import * as trpc from '@trpc/server';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TRPCError } from '@trpc/server';
import cors from 'cors';

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  
  return {
    req,
    res,
  };
};
type Context = trpc.inferAsyncReturnType<typeof createContext>;

function createRouter() {
  return trpc.router<Context>();
}


// root router to call
export const appRouter = createRouter()
  .query('hello', {
    input: z.object({ name: z.string().min(1) }),  
    resolve: ({ input, ctx }) => {
      return `hello ${input.name}`; 
    },
  });

export type AppRouter = typeof appRouter;

async function main() {
  // express implementation
  const app = express();

  app.use(cors())

  app.use((req, _res, next) => {
    // request logger
    console.log('⬅️ ', req.method, req.path, req.body ?? req.query);

    next();
  });


  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );

  app.listen(2021, () => {
    console.log('listening on port 2021');
  });
}

main();
