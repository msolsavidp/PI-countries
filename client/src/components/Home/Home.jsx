import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux';
import {getCountries, getActivities, filterByContinent, filterByActivity, orderByName, orderByPopulation} from '../../Redux/actions';
import { Link } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Card  from '../Card/Card';
import Pagination from "../Pagination/PaginationPage";
import {Button} from 'react-bootstrap';
import s from './Home.module.css';

export default function Home () {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const activities = useSelector((state)  => state.activities);
    // console.log(allCountries)
    //Estados locales
    //Seteo el orden local como vacío para que cambie cuando hago el filtrado por orden y me vuelva a renderizar las páginas sino no funciona no se me re renderiza la pagina cuando ordeno ascendente o descendente
    const [order, setOrder] = useState ('');
    //Creo el estado local que me devuelva la página actual y me setee (cambie el estado) a la nueva página actual, en 1 porque allí se inicializa
    const [currentPage, setCurrentPage] = useState(1);
    //Guardo cuántos personajes quiero por página

    const [countriesFirstPage, setCountriesFirstPage] = useState (9);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage === 1 ? currentPage * countriesFirstPage : currentPage * countriesPerPage; //10
    const indexOfFirstCountry = currentPage === 1 ? indexOfLastCountry - countriesFirstPage : indexOfLastCountry - countriesPerPage; //0
    //Tomo el arreglo de todos los países y lo corto entre el indice del primer personaje y del último
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    
    //seteo como estado local la página en la que estoy para que se modifiquen los números de los indexes anteriores y los countries de cada pagina
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect (() => {
        //despacho la acción
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]);


    //Hice esta función asíncrona porque primero me debo traer todos los países y después filtrarlos, si solo tengo el dispatch de filtrado luego del primer filtrado no puedo volver a hacerlo porque trata de hacerlo sobre los mismos países ya filtrados entonces no trae nada, es como si tuviera que hacer un refresh
    // const handleContinentFilter =  (e) => {
    //     // dispatch(getCountries());
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     dispatch(filterByContinent(e.target.value));
    //     setCurrentPage(1);
    // };

    // const handleFilterByActivity = (e) =>{
    //     dispatch(filterByActivity(e.target.value));
    //     console.log(e.target.value);
    //     setCurrentPage(1);
    // };

    // const handleSort = (e) => {
    //     e.preventDefault();
    //     dispatch(orderByName(e.target.value));
    //     setCurrentPage(1);
    //     //para que se modifique el estado local y se renderice
    //     setOrder(`Ordered ${e.target.value}`)
    // };

    // const handleSortByPopulation = (e) => {
    //     e.preventDefault();
    //     dispatch(orderByPopulation(e.target.value));
    //     setCurrentPage(1);
    //     setOrder(`Ordered ${e.target.value}`)
    // };

    return (
        <div className={s.backgr}>

            <NavBar setCurrentPage={setCurrentPage}/>

            <div className="row g-3 py-2">
                <div className="col-3 col-sm-3 col-lg-3 py-4" >
                    <SideBar setCurrentPage={setCurrentPage} />
                </div>
            <div>
                <Link to= '/activities'>
                <Button variant="outline-light">Create Activity</Button>
                </Link>
            </div>
            
            {/* <div>
             <select className= {s.select} onChange= {e => handleContinentFilter(e)}>
                    <option value='All'> All continents </option>
                    <option value='Africa'>Africa</option>
                    <option value='Americas'>Americas</option>
                    <option value='Antarctic'>Antarctic</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>

                <select className= {s.select} onChange = {e => handleSort(e)}>
                    <option value='country_asc'>País en orden alfabético (Asc)</option>
                    <option value='country_desc'>País en orden alfabético (Desc)</option>
                </select>

                <select className= {s.select} onChange = {e => {handleFilterByActivity(e)}}>
                    <option value='All'>All activities</option>
                 {activities.map((a) => (
                        <option value={a.name}>{a.name.charAt(0).toUpperCase() + a.name.slice(1)}</option>
                    ))}
                </select>

                <select className= {s.select} onChange = {e => {handleSortByPopulation(e)}}>
                    <option value='population_asc'>País por población (Asc)</option>
                    <option value='population_desc'>País por población (Desc)</option>
                </select> */}

                <div className={s.cardContainer}>
                {
                    currentCountries?.map (c => 
                        { 
                            return (
                            <fragment>
                                <Link to={`/countries/${c.id}`}>
                                    <Card name = {c.name} image = {c.image} continent = {c.continent} id = {c.id} />
                                </Link>
                            </fragment>
                            ) 
                        })
                }
                {/* {console.log(allCountries)} */}
                </div>

            </div>

            <div>
                <Pagination 
                countriesPerPage = { countriesPerPage }
                allCountries = { allCountries.length }
                pagination = { pagination }
                />
            </div>
            </div>
    );
};