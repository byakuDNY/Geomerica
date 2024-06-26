import express from "express";
import {
  getCountries,
  createCountry,
  getFiveCapitals,
  getFiveCountriesName,
  getFiveBandera,
  getCountry,
  deleteCountry,
} from "../controllers/country.controller.js";

const router = express.Router();

router.get("/", getCountries);

router.post("/", createCountry);

router.get("/five-capitals", getFiveCapitals);

router.get("/five-countries-name", getFiveCountriesName);

router.get("/five-bandera", getFiveBandera);

router.get("/:id", getCountry);

router.delete("/:id", deleteCountry);

export default router;
