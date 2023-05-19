import { createTRPCRouter, publicProcedure } from "@server/trpc";
import { prisma } from "@server/prisma";
import { z } from "zod";

export const announcementRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx, input }) => {
    return prisma.announcement.findMany({
      orderBy: [{ createdAt: "desc" }, { title: "asc" }],
    });
  }),

  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return prisma.announcement.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
});
