const express = require('express');
const { Router } = require('express');
const router = Router();
const { Activity, Country } = require("../db");
// const Country = require('../models/Country');

module.exports = router;


// router.get('/', async (req, res) => {
//     let { name, difficulty, duration, season, country } = req.body;
//     let [activity, created] = await Activity.findOrCreate({
//             where:{
//                 name,
//                 country
//             },
//             defaults: {
//             name,
//             difficulty,
//             duration,
//             season
//             }
//         });
//         res.json({created: created, activity});
// });


router.post ('/', async (req, res) => {
    //A country lo recibo del formulario del front
    let { name, difficulty, duration, season, country } = req.body;

    //////Cómo manejo el hecho de que pueden pasarme una actividad que ya existe para el mismo país ----- VER
    //////Una actividad puede pertenecer a más de una estación -- con el ENUM eso me tira error
    try{
    let newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
    });

    let countriesList = await Country.findAll({
        where: {
            name: country
        }
    });
    //Linkeo la actividad con el country
    newActivity.addCountry(countriesList);
    res.send('Activity added.')
    } catch (e) {
        res.status(404).json(e);
    };
});

// router.post ('/', async (req, res) => {
//     //A country lo recibo del formulario del front
//     let { name, difficulty, duration, season, country } = req.body;

//     //////Cómo manejo el hecho de que pueden pasarme una actividad que ya existe para el mismo país ----- VER
//     //////Una actividad puede pertenecer a más de una estación -- con el ENUM eso me tira error

//     try {
//     let activityInCountry = await Country.findAll({
//         where:{
//             name: country,
//             activities: name,
//         }
//     });

//     if (!activityInCountry){ 
//     let newActivity = await Activity.create({
//         name,
//         difficulty,
//         duration,
//         season,
//     });

//     let countriesList = await Country.findAll({
//         where: {
//             name: country
//         }
//     });
//     //Linkeo la actividad con el country
//     newActivity.addCountry(countriesList);
//     res.send('Activity added.')
// } else throw new Error ('The country already has the activity.');
//     } catch (e) {
//         res.status(404).json(console.log(e));
//     }
// });











// router.post ('/', async (req, res) => {
//     let { name, difficulty, duration, season } = req.body;
//     let [activity, created] = await Activity.findOrcreate({
//         where:{
//             name
//         },
//         defaults: {
//         name,
//         difficulty,
//         duration,
//         season
//         }
//     });
//     res.json({created: created, activity});
// });