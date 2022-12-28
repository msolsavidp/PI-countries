const express = require("express");
const axios = require("axios");
const { Router } = require("express");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db");
// const { Activity } = require('../models/Activity');
const router = Router();

router.get("/", async (req, res) => {
  let { name } = req.query;

  ///DUDA: al momento del filtrado por query no me devuelve el país si no le pongo acento (ex. Japón) cómo  unifico los símbolos del string? ---> RESPUESTA el normalize unifica
    try {
        let countriesList = await Country.findAll({
          include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
              attributes: [],
            },
          },
        attributes: ["image", "name", "continent", "population", "id"],
        });

            if (name) {
            let filteredCountries = await countriesList.filter((c) =>
                c.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
            );
            filteredCountries.length
                ? res.json(filteredCountries)
                : res.status(404).send("Country not found.");
            } else {
            res.json(countriesList);
            }   

    } catch (e) {
        res.status(404).json("There's a problem with the database.");
    }
});

router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    //área tiene que estar en km2 pero eso puede que lo modifique desde el front - not sure
    let filteredCountries = await Country.findByPk(id, {
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
      attributes: [
        "image",
        "name",
        "continent",
        "id",
        "capital",
        "subregion",
        "area",
        "population",
      ],
    });
    if (filteredCountries) return res.json(filteredCountries); //CHECK THIS
    throw new Error("País no encontrado");
  } catch (e) {
    res.status(404).json("Country not found. Try again.");
  }
});

module.exports = router;

// const getApiInfo = async () => {
//     const apiUrl = await axios.get('https://restcountries.com/v3/all');
//     const apiInfo = await apiUrl.data.map(async c => {
//                 await Country.create({
//                     id:c.cca3,
//                     name: c.name.official,
//                     image: c.flags[0],
//                     continent: c.region,
//                     capital: typeof c.capital !== 'undefined' ? c.capital[0] : 'No se encontró la capital en la base de datos',
//                     subregion: typeof c.subregion !== 'undefined' ? c.subregion : 'No hay subregión para este país',
//                     area: c.area,
//                     population: c.population
//                 });
//     });
// }

// axios.get('https://restcountries.com/v3/all',{
//     headers: {
//         "accept-encoding": null
//     }
// })
// .then(async r => {
//     await Country.sync({ force: true })
//     r.data.map(async c => {
//         await Country.create({
//             id:c.cca3,
//             name: c.name.official,
//             image: c.flags[0],
//             continent: c.region,
//             capital: typeof c.capital !== 'undefined' ? c.capital[0] : 'No se encontró la capital en la base de datos',
//             subregion: typeof c.subregion !== 'undefined' ? c.subregion : 'No hay subregión para este país',
//             area: c.area,
//             population: c.population
//         })
//         // console.log (r.data)
//     });
// });

//Checkear
// router.get('/', async (req, res) => {
//     let {name} = req.query;
//    try {
//     let filteredCountries = await Country.findAll({
//         attributes:['image', 'name', 'continent'],
//         where:{
//             name: {
//                 [Op.like]: `%${name}%`
//             }
//         }
//     });
//     res.json(filteredCountries);
//     } catch (e) {
//         res.status(404).json("No countries found.")
//     }
// });

//Uno la info de countries y activities para mostrarla
// const countriesList = async () => {
//     return  await Country.findAll({
//         include:{
//             model: Activity,
//             attributes: ['name'],
//             through: {
//                 attributes: [],
//             }
//         },
//         attributes:['image', 'name', 'continent']
//     });
// };
