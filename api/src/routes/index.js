const express = require ('express');
const { Router, response } = require('express');
const {Country} = require ('../db');
const countryMiddleware = require('./country.js');
const activityMiddleware = require('./activity.js');
// const router = express();
const axios = require ('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countryMiddleware);
router.use("/activities", activityMiddleware);



module.exports = router;

// ¿Cómo sería con un fetch?
//router.get('/',  (req, res) => {
//     fetch('https://restcountries.com/v3/all')
//     .then (r => r.json())
//     .then ((data) => data.map (el => { return {
//         id: el.cca3,
//         name: el.name.official,
//         image: el.flags[0],
//         continent: el.region,
//         capital: typeof c.capital !== 'undefined' ? c.capital[0] : 'No se encontró la capital en la base de datos',
//         subregion: typeof c.subregion !== 'undefined' ? c.subregion : 'No hay subregión para este país',
//         area: el.area,
//         population: el.population
//         }
//     })); 
// });

// //Checkear - VER findorcreate
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
//             ///////VER las traducciones de los nombres de los países y también los símbolos que tienen y traen consigo de la API /////////
//             name: c.name.common && c.translations.spa.common,
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