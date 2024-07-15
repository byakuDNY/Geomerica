import express from "express";
import {
  getCountries,
  createCountry,
  getCountry,
  deleteCountry,
  getRandomCountry,
  getFourCountriesAndCapitals,
  getFourCountriesAndFlags,
  // getFourCountriesAndMaps,
  getFourCountriesAndMapContinents,
} from "../controllers/country.controller.js";

const router = express.Router();

router.get("/", getCountries);

router.get("/random-country", getRandomCountry);

router.get("/capitals", getFourCountriesAndCapitals);

router.get("/flags", getFourCountriesAndFlags);

// router.get("/maps", getFourCountriesAndMaps);

router.get("/maps-continents", getFourCountriesAndMapContinents);

router.get("/:id", getCountry);

router.post("/", createCountry);

router.delete("/:id", deleteCountry);

export default router;
