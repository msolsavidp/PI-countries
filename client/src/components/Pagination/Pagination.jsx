import React, { useState } from "react";
import s from './Pagination.module.css';

export default function Pagination ({countriesPerPage, allCountries, pagination, currentPage, setCurrentPage}) {
    
    const pageNumberLimit = 5;
    const pageNumbers = [];

    const[maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);

    //recorro jun arreglo que tomo el numero que resulta de dividir todos los países por la cantidad de países por pagina y lo pusheo en page Numbers
    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    };

    const nPages = Math.ceil (allCountries / countriesPerPage);

    const nextPage = () => {
        if(currentPage !== nPages) setCurrentPage (currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage (currentPage - 1);
    };

    return (
        <div>
        <nav className={s.contpag}>
            <ul>
                    <button className={s.botpag} onClick = {prevPage}> Previous </button>
                
                { pageNumbers && pageNumbers.map(number => (
                        <button className={`${currentPage === number ? s.botpag +' a' : s.botpag}`} key={number} onClick = {() => pagination (number)}>{number}</button>
                ))}

                    <button className={s.botpag} onClick = {nextPage}> Next </button>
            </ul>
        </nav>
        </div>
    )
};










// const nextPage = () => {
//     if(currentPage !== nPages && currentPage + 1 > maxPageLimit){
//         setMaxPageLimit(maxPageLimit + pageNumberLimit);
//         setMinPageLimit(minPageLimit + pageNumberLimit);
//     } 
//     setCurrentPage (currentPage + 1);
// };

// const prevPage = () => {
//     if (currentPage !== 1 && (currentPage-1)% pageNumberLimit === 0) {
//         setMaxPageLimit(maxPageLimit - pageNumberLimit);
//         setMinPageLimit (minPageLimit - pageNumberLimit)
//     }
//     setCurrentPage (currentPage - 1);
// };


// { pageNumbers && pageNumbers.map(number => (
//     <button className={`s.botpag${currentPage === number ? ' a.active' : ''}`} key={number} onClick = {() => pagination (number)}>{number}</button>
// ))}