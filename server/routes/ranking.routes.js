import express from "express";

import {
  getCountriesNamesRanking,
  getCapitalsRanking,
  getFlagsRanking,
  getMapContinentsRanking,
} from "../controllers/ranking.controller.js";

const router = express.Router();

router.get("/countries-names", getCountriesNamesRanking);

router.get("/capitals", getCapitalsRanking);

router.get("/flags", getFlagsRanking);

router.get("/map-continents", getMapContinentsRanking);

export default router;
