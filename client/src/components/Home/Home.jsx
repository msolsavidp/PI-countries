import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux';
import {getCountries, filterByContinent, filterByActivity, orderByName, orderByPopulation} from '../../Redux/actions';
import { Link } from 'react-router-dom';
import Card  from '../Card/Card';
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import s from './Home.module.css';

export default function Home () {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    // console.log(allCountries)

    //Estados locales
    //Seteo el orden local como vacío para que cambie cuando hago el filtrado por orden y me vuelva a renderizar las páginas sino no funciona no se me re renderiza la pagina cuando ordeno ascendente o descendente
    const [order, setOrder] = useState ('');
    //Creo el estado local que me devuelva la página actual y me setee (cambie el estado) a la nueva página actual, en 1 porque allí se inicializa
    const [currentPage, setCurrentPage] = useState(1);
    //Guardo cuántos personajes quiero por página
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage; //10
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //0
    //Tomo el arreglo de todos los países y lo corto entre el indice del primer personaje y del último
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    
    //seteo como estado local la página en la que estoy para que se modifiquen los números de los indexes anteriores y los countries de cada pagina
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect (() => {
        //despacho la acción
        dispatch(getCountries());
    }, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getCountries());
    };

    //Hice esta función asíncrona porque primero me debo traer todos los países y después filtrarlos, si solo tengo el dispatch de filtrado luego del primer filtrado no puedo volver a hacerlo porque trata de hacerlo sobre los mismos países ya filtrados entonces no trae nada, es como si tuviera que hacer un refresh
    const handleContinentFilter = async (e) => {
        await dispatch(getCountries());
        dispatch(filterByContinent(e.target.value));
    };

    // //Otra opción en lugar de usar el async await es crear un estado global de all COuntries que siempre me traiga todos los países y trabajar desde ese para luego filtrar entonces la funcion sería la siguiente:
    // const handleContinentFilter = async (e) => {
    //     await dispatch(getCountries());
    //     dispatch(filterByContinent(e.target.value));
    // };

    const handleFilterByActivity = (e) =>{
        dispatch(filterByActivity(e.target.value))
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
            <Link to= '/activities'>
                Create Activity
            </Link>
            <h1>Api Countries</h1>
            <button onClick={e => {handleClick(e)}}> Refresh </button>

            <SearchBar/>
            
            <div>
             <select onChange= {e => handleContinentFilter(e)}>
                    <option value='All'> All </option>
                    <option value='Africa'>Africa</option>
                    <option value='Americas'>Americas</option>
                    <option value='Antarctic'>Antarctic</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>

                <select onChange = {e => handleSort(e)}>
                    <option value='country_asc'>País en orden alfabético (Asc)</option>
                    <option value='country_desc'>País en orden alfabético (Desc)</option>
                </select>

                <select onChange = {e => {handleFilterByActivity(e)}}>
                    {/* <option value='activitytype_asc'>País por tipo de actividad turística (Asc)</option>
                    <option value='activitytype_desc'>País por tipo de actividad (Desc)</option> */}
                </select>

                <select onChange = {e => {handleSortByPopulation(e)}}>
                    <option value='population_asc'>País por población (Asc)</option>
                    <option value='population_desc'>País por población (Desc)</option>
                </select>

                {
                    currentCountries?.map (c => { return (<Card name = {c.name} image = {c.image} continent = {c.continent} id = {c.id} />) })
                }
                {/* {console.log(allCountries)} */}

            </div>

            <div className={s.paginado}>
                <Pagination 
                countriesPerPage = { countriesPerPage }
                allCountries = { allCountries.length }
                pagination = { pagination }
                />
            </div>

        </div>
    );
};