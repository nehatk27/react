import { prisma } from "../lib/prisma.js";

export async function findAllIssues() {
  return await prisma.issue.findMany({
    include: {
      project: true,
    },
  });
}

export async function findIssueById(id: number) {
  return await prisma.issue.findUnique({
    where: {
      id,
    },
    include: {
      project: true,
    },
  });
}

export default findAllIssues;
