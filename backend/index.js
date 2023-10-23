import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import "dotenv/config";
import {Player} from "./models/playerModel.js"


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


app.get('/players/:name', async (req, res) => {
    const {name} = req.params;
    const player = await Player.findOne({player: name})
    return res.status(200).json(player);
});

app.get('/players', async(req, res) => {
    const players = await Player.find({})
    return res.status(200).json(players);
})







