import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import "dotenv/config"

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
});

app.get("/", (req, res) => {
    return res.status(234).send('hi');
});



