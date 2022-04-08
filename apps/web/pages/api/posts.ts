import { PrismaClient } from "db"
import { NextApiRequest, NextApiResponse } from "next"

// TODO: extract this function inside a utility file and handle re-connection issues in dev/prod mode
const db = new PrismaClient()

/**
 * Endpoint permettant de tester l'utilisation de Prisma sur un monorepo
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = await db.post.findMany();
  return res.json(posts);
}