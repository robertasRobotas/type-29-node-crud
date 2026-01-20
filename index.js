import express from "express";
import carsRouter from "./src/router/car.js";

const app = express();

app.use(express.json());

app.use(carsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "This endpoint does not exist" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
