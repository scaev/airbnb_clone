import { PrismaClient } from "@prisma/client";
// assign the Prisma client to a global this variable which is not affected by hot reload

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
