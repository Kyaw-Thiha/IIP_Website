// src/server/router.ts

import { createTRPCRouter } from "@server/trpc";
import { igcseClassRouter } from "./routers/igcseClass";
import { aLevelClassRouter } from "./routers/aLevelClass";
import { announcementRouter } from "./routers/announcement";

export const appRouter = createTRPCRouter({
  igcseClass: igcseClassRouter,
  aLevelClass: aLevelClassRouter,
  announcement: announcementRouter,
});

export type AppRouter = typeof appRouter;
