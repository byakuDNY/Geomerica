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
// const getCountry = async (req, res) => {
//   try {
//     const country = await Country.findById(req.params.id);
//     if (!country) {
//       return res.status(404).json({ error: "Country not found" });
//     }
//     res.status(200).json(country);
//   } catch (error) {
//     console.log("Error in getCountry controller", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

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

// const getRandomCountry = async (req, res) => {
//   try {
//     const country = await Country.aggregate([{ $sample: { size: 1 } }]);
//     res.status(200).json(country);
//   } catch (error) {
//     console.log("Error in getCountry controller", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getFourCountriesAndCapitals = async (req, res) => {
//   try {
//     const countries = await Country.aggregate([{ $sample: { size: 4 } }]);
//     const countriesAndCapitals = countries.map((country) => ({
//       pais: country.pais,
//       capital: country.capital,
//     }));
//     res.status(200).json(countriesAndCapitals);
//   } catch (error) {
//     console.log("Error in getFourCountriesAndCapitals controller", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

//get 40 paises y sus banderas
const getFortyCountriesAndFlags = async (req, res) => {
  try {
    let countries = await Country.aggregate([{ $sample: { size: 40 } }]);

    if (countries.length < 40) {
      const remaining = 40 - countries.length;
      const moreCountries = await Country.aggregate([
        { $sample: { size: remaining } },
      ]);

      countries = countries.concat(moreCountries);
    }

    const countriesAndFlags = countries.map((country) => ({
      pais: country.pais,
      bandera: country.bandera,
    }));

    res.status(200).json(countriesAndFlags);
  } catch (error) {
    console.log("Error in getCountriesAndFlags controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get 40 paises y sus mapas
const getFortyCountriesAndMaps = async (req, res) => {
  try {
    let countries = await Country.aggregate([{ $sample: { size: 40 } }]);

    if (countries.length < 40) {
      const remaining = 40 - countries.length;
      const moreCountries = await Country.aggregate([
        { $sample: { size: remaining } },
      ]);

      countries = countries.concat(moreCountries);
    }

    const countriesAndMaps = countries.map((country) => ({
      pais: country.pais,
      mapa: country.mapa,
      localizacion: country.localizacion,
    }));

    res.status(200).json(countriesAndMaps);
  } catch (error) {
    console.log("Error in getCountriesAndMaps controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// const getFourCountriesAndMapContinents = async (req, res) => {
//   try {
//     const countries = await Country.aggregate([{ $sample: { size: 4 } }]);
//     const countriesAndMapContinents = countries.map((country) => ({
//       pais: country.pais,
//       localizacion: country.localizacion,
//     }));
//     res.status(200).json(countriesAndMapContinents);
//   } catch (error) {
//     console.log("Error in getFourCountriesAndMapContinents controller", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const editCountryData = async (req, res) => {
  try {
    const countryId = req.params.id;

    const country = await Country.findById(countryId);
    if (!country) {
      return res.status(404).json({ error: "Country not found" });
    }

    const updateData = {};
    if (req.body.pais) updateData.pais = req.body.pais;
    if (req.body.capital) updateData.capital = req.body.capital;
    if (req.body.bandera) updateData.bandera = req.body.bandera;
    if (req.body.mapa) updateData.mapa = req.body.mapa;
    if (req.body.localizacion) updateData.localizacion = req.body.localizacion;

    const updatedCountry = await Country.findByIdAndUpdate(
      countryId,
      { $set: updateData },
      { new: true }
    );

    res.status(200).json(updatedCountry);
  } catch (error) {
    console.error("Error al editar pais", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getCountries,
  createCountry,
  // getCountry,
  deleteCountry,
  // getRandomCountry,
  // getFourCountriesAndCapitals,
  getFortyCountriesAndFlags,
  getFortyCountriesAndMaps,
  // getFourCountriesAndMapContinents,
};
