import express from "express";
const port = 8000;
const app = express();
app.get("/", (req, res) => {
    res.send("Hei Kansa!");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map