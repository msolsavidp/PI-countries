import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCountries} from '../../Redux/actions';
import { filterByContinent } from "../../Redux/actions";
import { filterByActivity, orderByName, orderByPopulation } from "../../Redux/actions";
// import './Filters.css'


export default function SideBar({ setCurrentPage, setOrder }) {
    const allCountries = useSelector((state) => state.countries);
    const activities = useSelector((state)  => state.activities);
    // const [order, setOrder] = useState ('');
    const dispatch = useDispatch()


    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getCountries());
    };

    const handleContinentFilter =  (e) => {
        // dispatch(getCountries());
        e.preventDefault();
        console.log(e.target.value)
        dispatch(filterByContinent(e.target.value));
        setCurrentPage(1);
    };

    const handleFilterByActivity = (e) =>{
        dispatch(filterByActivity(e.target.value));
        console.log(e.target.value);
        setCurrentPage(1);
    };

    const handleSort = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        //para que se modifique el estado local y se renderice
        setOrder(`Ordered ${e.target.value}`)
    };

    const handleSortByPopulation = (e) => {
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`)
    };

    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark  mt-5">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Filters</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        Continents
                        <br />
                        <select name="filterType" id="" onChange={(e) => (handleContinentFilter(e))} style={{ width: '80%' }} className=" form-select mt-2 mb-2" >
                            <option value="all">All</option>
                            <option value='Africa'>Africa</option>
                            <option value='Americas'>Americas</option>
                            <option value='Antarctic'>Antarctic</option>
                            <option value='Asia'>Asia</option>
                            <option value='Europe'>Europe</option>
                            <option value='Oceania'>Oceania</option>
                        </select>
                    </li>
                    
                    <li>
                        Order
                        <br />
                        <select name="filterType" id="" onChange={(e) => (handleSort(e))} style={{ width: '80%' }} className="form-select mt-2 mb-2" >
                            <option value="all">All</option>
                            <option value='country_asc'>A - Z</option>
                            <option value='country_desc'>Z - A</option>
                        </select>
                    </li>

                    <li>
                        Touristic activities
                        <br />
                        <select name="filterType" id="" onChange={(e) => (handleFilterByActivity(e))} style={{ width: '80%' }} className=" form-select mt-2 mb-2" >
                            <option value="all">All</option>
                            {
                                activities?.map((a, index) => <option value={a.name} key={index}>{a.name.charAt(0).toUpperCase() + a.name.slice(1)}</option>)
                            }
                        </select>
                    </li>

                    <li>
                        Population
                        <br />
                        <select  name="filterQuant" id="" onChange={(e) => (handleSortByPopulation(e))} style={{ width: '80%' }} className="form-select mt-2 mb-2" >
                            <option value="population_asc" >Country by population (asc)</option>
                            <option value="population_desc">Country by population (desc)</option>
                        </select>
                    </li>
                </ul>
                <hr />
                {/* <div>
                    <button type="submit" className="btn btn-warning float-end me-4" onClick={(e) => handleClick(e)}>Filter</button>
                </div> */}


            </div>
        </div>

    )
};