import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  if (req.method === "GET" && req.url === "/tasks") {
    const tasks = await fs.readFile("data/data.json", "utf-8");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(tasks);
    console.log("Tasks fetched successfully");
  } else if (req.method === "POST" && req.url === "/addtask") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      try {
        const task = JSON.parse(body);
        const tasks = JSON.parse(await fs.readFile("data/data.json", "utf-8"));
        tasks.push(task);
        await fs.writeFile("data/data.json", JSON.stringify(tasks));
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Task added successfully" }));
        console.log("Task added:", task);
      } catch (error) {
        console.error("Error adding task:", error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to add task" }));
      }
    });
  } else if (req.method === "PUT" && req.method === "update") {
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
