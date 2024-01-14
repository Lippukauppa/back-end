import express, { Request, Response } from "express";
const port = 8000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hei Kansa!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
