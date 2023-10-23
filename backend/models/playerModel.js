import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({}, {collection: 'Stats'});

export const Player = mongoose.model("Player", playerSchema);


