import Ranking from "../models/ranking.model.js";

// const getCountriesNamesRanking = async (req, res) => {
//   try {
//     const countriesNamesRanking = await Ranking.find({
//       game_mode: "paises",
//     });
//     res.status(200).json(countriesNamesRanking);
//   } catch (error) {
//     console.log("Error in getCountriesNamesRanking controller", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getCapitalsRanking = async (req, res) => {
//   try {
//     const capitalsRanking = await Ranking.find({ game_mode: "capitales" });
//     res.status(200).json(capitalsRanking);
//   } catch (error) {
//     console.log("Error in getCapitalsRanking controller", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const getFlagsRanking = async (req, res) => {
  try {
    const flagsRanking = await Ranking.find({ game_mode: "bandera" });
    res.status(200).json(flagsRanking);
  } catch (error) {
    console.log("Error in getFlagsRanking controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMapsRanking = async (req, res) => {
  try {
    const mapContinentsRanking = await Ranking.find({
      game_mode: "mapa",
    });
    res.status(200).json(mapContinentsRanking);
  } catch (error) {
    console.log("Error in getMapsRanking controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createRanking = async (req, res) => {
  try {
    const { game_mode, username, scores } = req.body;
    const newRanking = new Ranking({
      game_mode,
      username,
      scores,
    });
    await newRanking.save();
    res.status(201).json(newRanking);
  } catch (error) {
    console.log("Error in createRanking controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  // getCountriesNamesRanking,
  // getCapitalsRanking,
  getFlagsRanking,
  getMapsRanking,
  createRanking,
};
