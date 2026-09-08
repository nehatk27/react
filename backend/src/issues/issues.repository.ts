import { prisma } from "../lib/prisma.js";

export async function findAllIssues() {
  return await prisma.issue.findMany({
    include: {
      project: true,
    },
  });
}

export default findAllIssues;
