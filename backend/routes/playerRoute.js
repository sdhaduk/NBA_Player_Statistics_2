import express from 'express';
import {Player} from "../models/playerModel.js"

const router = express.Router();

// Get a specific player
router.get('/single/:name', async (req, res) => {
    try {
        const {name} = req.params;
        const player = await Player.findOne({player: name})
        return res.status(200).json(player);

    } catch(err) {
        console.log(err.message)
        return res.status(500).send({message: err.message})
    }
});

// Get all players
router.get('/all', async(req, res) => {
    try {
        const players = await Player.find({})
        return res.status(200).json(players);

    } catch(err) {
        console.log(err.message)
        return res.status(500).send({message: err.message})
    }
});

//get top x amount for selected statistic
router.get('/stat/:statistic/:number', async (req, res) => {
    const number = req.params.number;
    const statistic = req.params.statistic;

    try {
        const players = await Player.find().sort({[statistic]:-1}).limit(number);
        return res.status(200).json(players);

    } catch(err) {
        console.log(err.message)
        return res.status(500).send({message: err.message}) 
    }
});

export default router;


