import { createTRPCRouter, publicProcedure } from "@server/trpc";
import { prisma } from "@server/prisma";
import { z } from "zod";

export const igcseClassRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx, input }) => {
    return prisma.iGCSEClass.findMany({
      orderBy: [{ year: "desc" }, { series: "desc" }],
    });
  }),

  getByYearAndSeries: publicProcedure
    .input(
      z.object({
        year: z.number(),
        series: z.union([
          z.literal("Feb/Mar"),
          z.literal("May/Jun"),
          z.literal("Oct/Nov"),
        ]),
      })
    )
    .query(({ ctx, input }) => {
      return prisma.iGCSEClass.findFirst({
        where: {
          year: input.year,
          series: input.series,
        },
        include: {
          alumni: {
            orderBy: [{ totalGrades: "desc" }, { name: "asc" }],
          },
        },
      });
    }),
});
