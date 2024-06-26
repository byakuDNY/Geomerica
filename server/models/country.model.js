import mongoose from "mongoose";

const countrySchema = new mongoose.Schema(
  {
    pais: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
    continente: {
      type: String,
      required: true,
    },
    bandera: {
      type: String,
    },
    mapa: {
      type: String,
    },
    localizacion: {
      type: String,
    },
  },
  { collection: "Paises" }
);

const Country = mongoose.model("Paises", countrySchema);

export default Country;
