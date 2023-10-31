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
        const players = await Player.find({
            age:{$nin:[1000, 1]}, pts_per_game:{$nin:[1000, 1]}, ast_per_game:{$nin:[1000, 1]}, stl_per_game:{$nin:[1000, 1]}, 
            blk_per_game:{$nin:[1000, 1]}, tov_per_game:{$nin:[1000, 1]}, orb_per_game:{$nin:[1000, 1]}, drb_per_game:{$nin:[1000, 1]},
            trb_per_game:{$nin:[1000, 1]}, mp_per_game:{$nin:[1000, 1]}, fg_per_game:{$nin:[1000, 1]}, fga_per_game:{$nin:[1000, 1]}, 
            fg_percent:{$nin:[1000, 1]}, x3p_percent:{$nin:[1000, 1]}, e_fg_percent:{$nin:[1000, 1]}, ft_percent:{$nin:[1000, 1]}}).sort({[statistic]:-1}).limit(number);
        return res.status(200).json(players);
        
    } catch(err) {
        console.log(err.message)
        return res.status(500).send({message: err.message}) 
    }
});

export default router;


