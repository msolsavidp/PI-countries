import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux';
import {getCountries, getActivities, filterByContinent, filterByActivity, orderByName, orderByPopulation} from '../../Redux/actions';
import { Link } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Card  from '../Card/CountryCard';
// import Pagination from "../Pagination/PaginationPage";
import {Button} from 'react-bootstrap';
import './Home.css';
import PaginationPage from "../PaginationPage/PaginationPage";

export default function Home () {

    const dispatch = useDispatch();
    const pageNumberLimit = 5;
    const allCountries = useSelector((state) => state.countries);
    const activities = useSelector((state)  => state.activities);
    // console.log(allCountries)
    //Estados locales
    //Seteo el orden local como vacío para que cambie cuando hago el filtrado por orden y me vuelva a renderizar las páginas sino no funciona no se me re renderiza la pagina cuando ordeno ascendente o descendente
    const [order, setOrder] = useState ('');
    //Creo el estado local que me devuelva la página actual y me setee (cambie el estado) a la nueva página actual, en 1 porque allí se inicializa
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(6);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);


    const indexOfLastCountry = currentPage * countriesPerPage; //10
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //0
    //Tomo el arreglo de todos los países y lo corto entre el indice del primer personaje y del último
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    
    //seteo como estado local la página en la que estoy para que se modifiquen los números de los indexes anteriores y los countries de cada pagina
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect (() => {
        //despacho la acción
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch, setCurrentPage]);

    const onPrevClick = ()=>{
        if((currentPage-1) % pageNumberLimit === 0){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev => prev-1);
     };
    
    const onNextClick = ()=>{
         if(currentPage + 1 > maxPageLimit){
             setMaxPageLimit(maxPageLimit + pageNumberLimit);
             setMinPageLimit(minPageLimit + pageNumberLimit);
         }
         setCurrentPage(prev=>prev+1);
      };

    return (
        <div className="backgr">

            <NavBar setCurrentPage={setCurrentPage}/>

            <div className="row g-3 py-2">
                <div className="col-3 col-sm-3 col-lg-3 py-4" >
                    <SideBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
                </div>


                {
                    <div className="Cards container col py-5 ">
                    {currentCountries?.map (c => 
                        { 
                            return (
                            <>
                                <Link to={`/countries/${c.id}`}>
                                    <Card name = {c.name} image = {c.image} continent = {c.continent} id = {c.id} />
                                </Link>
                            </>
                            ) 
                        })
                    }
                    </div>
                }

            <div>
                <PaginationPage 
                countriesPerPage = { countriesPerPage }
                allCountries = { allCountries.length }
                pageNumberLimit = { pageNumberLimit }
                maxPageLimit = { maxPageLimit }
                minPageLimit = { minPageLimit }
                onPrevClick = { onPrevClick }
                onNextClick = { onNextClick }
                onPageChange = { onPageChange }
                />
            </div>
            </div>
            </div>
    );
};