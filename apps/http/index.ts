import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();

app.use(express.json());

const port = 3001;

app.get("/users", async (req, res) => {
  try {
    const users = await prismaClient.user.findMany();

    if (!users) {
      throw new Error("No users found");
    }

    res.json({
      message: "users fetched successfully",
      users,
    });
  } catch (error) {
    res.json({
      message:
        error instanceof Error ? error.message : "Error while fetching users.",
    });
  }
});

app.post("/user", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      throw new Error("username and password are required.");
    }

    await prismaClient.user.create({
      data: {
        username,
        password,
      },
    });

    res.json({
      message: "user created successfully",
    });
  } catch (error) {
    res.json({
      message:
        error instanceof Error ? error.message : "Error while creating user.",
    });
  }
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
