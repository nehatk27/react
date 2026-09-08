import { prisma } from "../src/lib/prisma.js";

async function main() {
  const authentication = await prisma.project.create({
    data: {
      name: "Authentication",
      description: "Authentication-related issues",
    },
  });

  const ui = await prisma.project.create({
    data: {
      name: "UI",
      description: "UI-related issues",
    },
  });

  const settings = await prisma.project.create({
    data: {
      name: "Settings",
      description: "Settings-related issues",
    },
  });

  await prisma.issue.createMany({
    data: [
      {
        title: "fix login bug",
        description: "Resolve the login issue",
        projectId: authentication.id,
        assigneeName: "Fida",
        status: "Open",
        priority: "High",
        dueDate: new Date("2026-08-30"),
        labels: [],
      },
      {
        title: "Authentication issue",
        description: "Investigate the authentication issue.",
        projectId: authentication.id,
        assigneeName: "Varsha",
        status: "InProgress",
        priority: "Medium",
        dueDate: new Date("2026-09-10"),
        labels: [],
      },
      {
        title: "Darkmode not rendering",
        description: "Fix dark mode rendering.",
        projectId: ui.id,
        assigneeName: "Leni",
        status: "Closed",
        priority: "Low",
        dueDate: new Date("2026-09-05"),
        labels: [],
      },
      {
        title: "Issue with settings data",
        description: "Investigate the settings data issue.",
        projectId: settings.id,
        assigneeName: "Aami",
        status: "Open",
        priority: "Medium",
        dueDate: new Date("2026-09-08"),
        labels: [],
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
