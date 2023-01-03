const express = require('express');
const { Router } = require('express');
const router = Router();
const { Op } = require('sequelize');
const { Activity, Country } = require("../db");
// const Country = require('../models/Country');

module.exports = router;


router.get('/', async (req, res) => {
    let activities = await Activity.findAll({
        attributes:["name", "difficulty", "duration", "season"]
        });
        res.json(activities)
});

router.post ('/', async (req, res) => {
        //A country lo recibo del formulario del front
        let { name, difficulty, duration, season, country } = req.body;
    
        //////Cómo manejo el hecho de que pueden pasarme una actividad que ya existe para el mismo país ----- VER
        //////Una actividad puede pertenecer a más de una estación -- con el ENUM eso me tira error 
            
        //busco si la actividad ya está en la base de datos

        let foundActivity= await Activity.findOne({
            where:{
                name:name
            }
        });
        console.log(foundActivity)


        let foundCountry = await Country.findAll({
            where: {
                name: country
            }
        });

        if (!foundActivity) {    
            let newActivity= await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });

        //Linkeo la actividad con el country
        let activityAdd = await newActivity.addCountries(foundCountry);
        res.send('Activity added.')
    }
    //Si la actividad fue encontrada la linkeo al país
    else {
        await foundActivity.addCountries(foundCountry);
        res.send('Activity added.')
    };
    });


// router.post ('/', async (req, res) => {
//     //A country lo recibo del formulario del front
//     let { name, difficulty, duration, season, country } = req.body;

//     try{
//     //Si falta algún dato tira error
//     if (!name || !difficulty || !duration || !season || !country) throw new Error ('You must complete all the required info.')

//     //Busco a ver si ya existe la actividad en mi base de datos
//     const foundActivity = Activity.findAll({
//         where:{
//             name
//         }
//     });
//     console.log(foundActivity);

//     let countriesList = await Country.findAll({
//         where: {
//             name: country
//         }
//     });

//     if (!foundActivity){
//         let newActivity = await Activity.create({
//             name,
//             difficulty,
//             duration,
//             season,
//             country
//         });
//         //Linkeo la actividad con el country
//         newActivity.addCountries(countriesList);
//         res.send('Activity added.')
//     } else {
//         await foundActivity.addCountries(countriesList);
//         res.send('Activity added.')
//     }
// } catch (e) {
//     res.status(404).send(e)
// }
//     //////Cómo manejo el hecho de que pueden pasarme una actividad que ya existe para el mismo país ----- VER
//     //////Una actividad puede pertenecer a más de una estación -- con el ENUM eso me tira error
// });

// router.post ('/', async (req, res) => {
//     //A country lo recibo del formulario del front
//     let { name, difficulty, duration, season, country } = req.body;

//     //////Cómo manejo el hecho de que pueden pasarme una actividad que ya existe para el mismo país ----- VER
//     //////Una actividad puede pertenecer a más de una estación -- con el ENUM eso me tira error
//     try{    
//     let newActivity = await Activity.create({
//         name,
//         difficulty,
//         duration,
//         season,
//         country
//     });

//     let countriesList = await Country.findAll({
//         where: {
//             name: country
//         }
//     });
//     //Linkeo la actividad con el country
//     newActivity.addCountries(countriesList);
//     res.send('Activity added.')
//     } catch (e) {
//         res.status(404).json(e);
//     };
// });



/////////MAS CERCA DE RESOLVERSE
// router.post ('/', async (req, res) => {
//     //A country lo recibo del formulario del front
//     let { name, difficulty, duration, season, country } = req.body;

//     //////Cómo manejo el hecho de que pueden pasarme una actividad que ya existe para el mismo país ----- VER
//     //////Una actividad puede pertenecer a más de una estación -- con el ENUM eso me tira error

//     try {
//     let activityInCountry = await Country.findAll({
//         where:{
//             activities: { [Op.in] : name },
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
//     newActivity.addCountries(countriesList);
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


// router.post('/', async (req, res) => {
//     let { name, difficulty, duration, season, country } = req.body;

//     let activityInCountry = await Activity.findAll({
//         where:{
//             name
//         },
//         attributes:["name", "difficulty", "duration", "season", "country"]
//     });

//    res.json(activityInCountry);
// })

// router.post('/', async (req, res) =>{
//     let { name, difficulty, duration, season, country } = req.body;
    
//     try{
//     let countryId = await Country.findAll({
//         where:{
//             name:country
//         },
//         attributes:['id']
//     });

//     let activityId = await Activity.findAll({
//         where:{
//             name
//         },
//         attributes:['id']
//     });

//     console.log(countryId[0].country.dataValues, activityId.id)

//     let match = await Country_Activity.findAll({
//         where:{
//             countryId: countryId,
//             activityId: activityId
//         }
//     });
//     console.log(match)

//     if (match.length !== 0) throw new Error('This activity already exists in the database');

//     let newActivity = await Activity.create({
//                 name,
//                 difficulty,
//                 duration,
//                 season,
//                 country
//             });
        
//             let countriesList = await Country.findAll({
//                 where: {
//                     name: country
//                 }
//             });
//             //Linkeo la actividad con el country
//             newActivity.addCountry(countriesList);
//             res.send('Activity added.')
//             } catch (e) {
//                 res.status(404).json(e);
//             };
//         });