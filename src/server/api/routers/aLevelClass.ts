import { createTRPCRouter, publicProcedure } from "@server/trpc";
import { prisma } from "@server/prisma";
import { z } from "zod";

export const aLevelClassRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx, input }) => {
    return prisma.aLevelClass.findMany({
      orderBy: [{ year: "desc" }, { series: "desc" }],
    });
  }),

  getByYearAndSeries: publicProcedure
    .input(
      z.object({
        year: z.number(),
        series: z.union([
          z.literal("Jan"),
          z.literal("May/Jun"),
          z.literal("Oct"),
        ]),
      })
    )
    .query(({ ctx, input }) => {
      return prisma.aLevelClass.findFirst({
        where: {
          year: input.year,
          series: input.series,
        },
        include: {
          alumni: { orderBy: [{ totalGrades: "desc" }, { name: "asc" }] },
        },
      });
    }),
});
