import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import "dotenv/config";
import playerRoute from "./routes/playerRoute.js";


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to database');
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.status(200).json({message: "hi"})
});

app.use('/players', playerRoute);









