// import app from "./app.js";

// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on https://localhost:${PORT}`);
// });


import app from "./app.js";
import { prisma } from "./lib/prisma.js";

const PORT = 3000;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

startServer();