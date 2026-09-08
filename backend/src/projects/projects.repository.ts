import { prisma } from "../lib/prisma.js";

export async function findAllProjects() {
  return await prisma.project.findMany({
    include: {
      _count: {
        select: {
          issues: true,
        },
      },
    },
  });
}

export default findAllProjects;
