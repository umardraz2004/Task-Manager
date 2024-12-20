import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "GET" && req.url === "/tasks") {
    const tasks = await fs.readFile("data/data.json", "utf-8");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(tasks);
    console.log("Tasks fetched successfully");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
