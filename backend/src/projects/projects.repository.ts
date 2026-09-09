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

export async function findProjectById(id: number) {
  return await prisma.project.findUnique({
    where: {
      id,
    },
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
