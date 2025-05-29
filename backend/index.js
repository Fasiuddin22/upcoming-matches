import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/matches", async (req, res) => {
  const response = await fetch(
    "https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4328&s=2024-2025"
  );
  const data = await response.json();
  res.json(data.events || []);
});

app.listen(3001, () => console.log("Server running on port 3001"));
