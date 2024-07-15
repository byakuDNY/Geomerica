import mongoose from "mongoose";

const rankingSchema = new mongoose.Schema(
  {
    game_mode: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    scores: {
      type: String,
      required: true,
    },
  },
  { collection: "Ranking" }
);

const Ranking = mongoose.model("Ranking", rankingSchema);

export default Ranking;
