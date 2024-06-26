import express from "express";
import {
  getCountries,
  createCountry,
  getFiveCapitals,
  getFiveCountriesName,
  getFiveBandera,
  getCountry,
  deleteCountry,
  getFiveLocalizacion,
  getFiveMapa,
} from "../controllers/country.controller.js";

const router = express.Router();

router.get("/", getCountries);

router.get("/cinco-nombre-paises", getFiveCountriesName);

router.get("/cinco-capitals", getFiveCapitals);

router.get("/cinco-banderas", getFiveBandera);

router.get("/cinco-mapas", getFiveMapa);

router.get("/cinco-localizacion", getFiveLocalizacion);

router.get("/:id", getCountry);

router.post("/", createCountry);

router.delete("/:id", deleteCountry);

export default router;
