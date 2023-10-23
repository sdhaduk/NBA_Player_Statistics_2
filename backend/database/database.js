import mysql from 'mysql2';

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise()

const getStats = async (playerName) => {
    const [rows] = await pool.query(
    `SELECT player, tm, pos, g, mp_per_game, fg_per_game, fga_per_game, fg_percent, x3p_percent,
    x2p_percent, ft_percent, orb_per_game, drb_per_game, trb_per_game, ast_per_game, blk_per_game, tov_per_game, pts_per_game, stl_per_game
    FROM player_data
    WHERE player = ?`, [playerName]);

    return rows[0]
};

const stats = await getStats('Aaron Holiday')
console.log(stats)