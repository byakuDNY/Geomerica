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

const getRandomCountry = async (req, res) => {
  try {
    const country = await Country.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(country);
  } catch (error) {
    console.log("Error in getCountry controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getFourCountriesAndCapitals = async (req, res) => {
  try {
    const countries = await Country.aggregate([{ $sample: { size: 4 } }]);
    const countriesAndCapitals = countries.map((country) => ({
      pais: country.pais,
      capital: country.capital,
    }));
    res.status(200).json(countriesAndCapitals);
  } catch (error) {
    console.log("Error in getFourCountriesAndCapitals controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getFourCountriesAndFlags = async (req, res) => {
  try {
    const countries = await Country.aggregate([{ $sample: { size: 4 } }]);
    const countriesAndFlags = countries.map((country) => ({
      pais: country.pais,
      bandera: country.bandera,
    }));
    res.status(200).json(countriesAndFlags);
  } catch (error) {
    console.log("Error in getFourCountriesAndFlags controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// const getFourCountriesAndMaps = async (req, res) => {
//   try {
//     const countries = await Country.aggregate([{ $sample: { size: 4 } }]);
//     const countriesAndMaps = countries.map((country) => ({
//       pais: country.pais,
//       mapa: country.mapa,
//     }));
//     res.status(200).json(countriesAndMaps);
//   } catch (error) {
//     console.log("Error in getFourCountriesAndMaps controller", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const getFourCountriesAndMapContinents = async (req, res) => {
  try {
    const countries = await Country.aggregate([{ $sample: { size: 4 } }]);
    const countriesAndMapContinents = countries.map((country) => ({
      pais: country.pais,
      localizacion: country.localizacion,
    }));
    res.status(200).json(countriesAndMapContinents);
  } catch (error) {
    console.log("Error in getFourCountriesAndMapContinents controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getCountries,
  createCountry,
  getCountry,
  deleteCountry,
  getRandomCountry,
  getFourCountriesAndCapitals,
  getFourCountriesAndFlags,
  // getFourCountriesAndMaps,
  getFourCountriesAndMapContinents,
};
