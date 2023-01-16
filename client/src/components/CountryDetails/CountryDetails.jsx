import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail, getActivities } from '../../Redux/actions';
import s from './CountryDetails.module.css';

export default function CountryDetail ({id}){

    console.log(id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryDetail(id));
        dispatch(getActivities())
    }, [dispatch]);

    const myCountry = useSelector ((state) => state.countryDetail);
    const activities = useSelector ((state) => state.activities);
    console.log(myCountry);
    console.log(activities);
    console.log(myCountry.activities)


    return (

        <div className={s.backr}>
        <div className={s.detailCard}>
            <div className={s.container}>
            {
                myCountry ?
                <div>
                    <h1 className={s.name}>{myCountry.name}</h1>
                    <img className={s.flag} src={myCountry.image} alt={myCountry.name}/>
                    <h3 className={s.continent}>Continent: {myCountry.continent}</h3>
                    <h3 className={s.detail}>Capital: {myCountry.capital}</h3>
                    <h5 className={s.detail}>Subregion: {myCountry.subregion}</h5>
                    <h5 className={s.detail}>Population: {myCountry.population} inhabitants</h5>
                    <h5 className={s.detail}>Area: {myCountry.area} km2</h5>
                    <h5 className={s.detail}>Code: {myCountry.id}</h5>


                    <h6 className={s.activitiesTitle}>Activities {myCountry.activities?.map(a => (
                        <div className={s.actContainer}>
                            <p className={s.activityName}>Activity: {a.name}</p>
                            <p className={s.detail}>Diffitulty: {a.difficulty} (1 easy - 5 super hard)</p>
                            <p className={s.detail}>Duration: {a.duration} hours</p>
                            <p className={s.detail}>Season: {a.season}</p>
                        </div>
                        ))}
                        </h6>

                </div>
                
                : <p>Loading...</p>
            } 
            </div>

        </div>
        <div>
        <div>
            <Link to= '/activities'>
            <button className={s.btnHome}>Create touristic activity</button>                
            </Link>
        </div>

            <Link to='/home'>
            <button className={s.btnHome}>Back Home</button>
            </Link>
        </div>
    </div>

    )
};