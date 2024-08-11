import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        msg: "backend"
    });
});

app.listen(4000, () => {
    console.log("Server is running on http://localhost:3000");
});
