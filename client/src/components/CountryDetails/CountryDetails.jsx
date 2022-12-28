import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail, getActivities } from '../../Redux/actions';

export default function CountryDetail ({id}){

    // let id = match.params.id;
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

    // let filteredActivity = if (activities.country.includes(myCountry.name)) activitiesfilter(a => a.country.includes(myCountry.name));
    // if (activities.country.includes(myCountry.name)) {let filteredActivities= activities.filter(a => a.country.includes(myCountry.name))};

    return (
        <div>
            {
                myCountry ?
                <div>
                    <h1>{myCountry.name}</h1>
                    <img src={myCountry.image} alt={myCountry.name}/>
                    <h3>Continent: {myCountry.continent}</h3>
                    <h3>Capital: {myCountry.capital}</h3>
                    <h5>Subregion: {myCountry.subregion}</h5>
                    <h5>Population: {myCountry.population} inhabitants</h5>
                    <h5>Area: {myCountry.area} km2</h5>
                    <h6>Activities: {myCountry.activities?.map(a => (
                        <div>
                            <p>Activity: {a.name}</p>
                            <p>Diffitulty: {a.difficulty} (1 easy - 5 super hard)</p>
                            <p>Duration: {a.duration} hours</p>
                            <p>Season: {a.season}</p>
                        </div>
                        ))}
                        </h6>
                </div>
                
                : <p>Loading...</p>
            } 

            <Link to='/home'>
                <button>Back Home</button>
            </Link>
        </div>
    )
};