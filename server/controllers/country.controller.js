import Country from "../models/country.model.js";

//get todos los paises
const getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json(countries);
  } catch (error) {
    console.log("Error in getCountries controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get solo un pais
const getCountry = async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    if (!country) {
      return res.status(404).json({ error: "Country not found" });
    }
    res.status(200).json(country);
  } catch (error) {
    console.log("Error in getCountry controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//crear un pais
const createCountry = async (req, res) => {
  try {
    const country = new Country(req.body);
    await country.save();
    res.status(201).json(country);
  } catch (error) {
    console.log("Error in createCountry controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//eliminar un pais
const deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByIdAndDelete(req.params.id);
    if (!country) {
      return res.status(404).json({ error: "Country not found" });
    }
    res.status(200).json({ message: "Country deleted successfully" });
  } catch (error) {
    console.log("Error in deleteCountry controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get 5 nonbres de paises
const getFiveCountriesName = async (req, res) => {
  try {
    const countries = await Country.aggregate([{ $sample: { size: 5 } }]);
    const countriesName = countries.map((country) => country.pais);
    res.status(200).json(countriesName);
  } catch (error) {
    console.log("Error in getFiveCapitals controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get 5 capitales
const getFiveCapitals = async (req, res) => {
  try {
    const countries = await Country.aggregate([{ $sample: { size: 5 } }]);

    const capitals = countries.map((country) => country.capital);
    res.status(200).json(capitals);
  } catch (error) {
    console.log("Error in getFiveCapitals controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get 5 banderas
const getFiveBandera = async (req, res) => {
  try {
    const countries = await Country.aggregate({ $sample: { size: 5 } });

    const banderas = countries.map((country) => country.bandera);
    res.status(200).json(banderas);
  } catch (error) {
    console.log("Error in getFiveBandera controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get 5 mapas de paises
const getFiveMapa = async (req, res) => {
  try {
    const countries = await Country.aggregate({ $sample: { size: 5 } });

    const mapasURL = countries.map((country) => country.mapa);
    res.status(200).json(mapasURL);
  } catch (error) {
    console.log("Error in getFiveMapa controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get 5 localizacion de paises
const getFiveLocalizacion = async (req, res) => {
  try {
    const countries = await Country.aggregate({ $sample: { size: 5 } });

    const localizacionURL = countries.map((country) => country.localizacion);
    res.status(200).json(localizacionURL);
  } catch (error) {
    console.log("Error in getFiveLocalizacion controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getCountries,
  createCountry,
  getFiveCapitals,
  getFiveCountriesName,
  getFiveBandera,
  getCountry,
  deleteCountry,
  getFiveMapa,
  getFiveLocalizacion,
};
