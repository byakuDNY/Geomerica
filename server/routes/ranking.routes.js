import express from "express";

import {
  // getCountriesNamesRanking,
  // getCapitalsRanking,
  getFlagsRanking,
  getMapsRanking,
  createRanking,
} from "../controllers/ranking.controller.js";

const router = express.Router();

// router.get("/countries-names", getCountriesNamesRanking);

// router.get("/capitals", getCapitalsRanking);

router.get("/flags", getFlagsRanking);

router.get("/maps", getMapsRanking);

router.get("/create", createRanking);

export default router;
