import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/users/routes.js";

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`o servidor est'a rodado na porta ${PORT}`);
});
