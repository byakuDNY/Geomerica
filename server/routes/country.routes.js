import express from "express";
import {
  getCountries,
  createCountry,
  // getCountry,
  deleteCountry,
  // getRandomCountry,
  // getFourCountriesAndCapitals,
  getFortyCountriesAndFlags,
  getFortyCountriesAndMaps,
  // getFourCountriesAndMapContinents,
} from "../controllers/country.controller.js";

const router = express.Router();

router.get("/", getCountries);

// router.get("/random-country", getRandomCountry);

// router.get("/capitals", getFourCountriesAndCapitals);

router.get("/flags", getFortyCountriesAndFlags);

router.get("/maps", getFortyCountriesAndMaps);

// router.get("/maps-continents", getCountriesAndFlags);

// router.get("/:id", getCountry);

router.post("/", createCountry);

router.delete("/:id", deleteCountry);

export default router;
