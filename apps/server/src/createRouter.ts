import * as trpc from "@trpc/server";
import superjson from "superjson";
import type { Context } from "./context";

export function createRouter() {
  return trpc.router<Context>().transformer(superjson);
}
