import express from 'express';
import {Player} from "../models/playerModel.js"

const router = express.Router();


// Get a specific player
router.get('/:name', async (req, res) => {
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
router.get('/', async(req, res) => {
    try {
        const players = await Player.find({})
        return res.status(200).json(players);
    } catch(err) {
        console.log(err.message)
        return res.status(500).send({message: err.message})
    }
});

export default router;


