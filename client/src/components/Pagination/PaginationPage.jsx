import React, { useState } from "react";
import Pagination from 'react-bootstrap/Pagination';

// import s from './Pagination.module.css';

export default function PaginationPage ({countriesPerPage, allCountries, pagination, currentPage, setCurrentPage}) {
    let pageNumbers = []

    // const[maxPageLimit, setMaxPageLimit] = useState(5);
    // const [minPageLimit, setMinPageLimit] = useState(0);

    const [pagesToDisplay, setPagesToDisplay] = useState([1, 2, 3, 4, 5]);

    //recorro jun arreglo que tomo el numero que resulta de dividir todos los países por la cantidad de países por pagina y lo pusheo en page Numbers
    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    };

    const nPages = Math.ceil (allCountries / countriesPerPage);

    const updatePagesToDisplay = (newPage) => {
        if (newPage > 3) {
            setPagesToDisplay([1, 2, 3, 4, 5]);
        } else if (newPage > nPages - 2) {
            setPagesToDisplay([nPages -4, nPages - 3, nPages -2, nPages - 1, nPages])
        } else {
            setPagesToDisplay([newPage -2, newPage -1, newPage +1, newPage + 2]);
        }
    };

    const nextPage = () => {
        if(currentPage !== nPages) {
            setCurrentPage (currentPage + 1);
            updatePagesToDisplay(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage (currentPage - 1);
            updatePagesToDisplay(currentPage - 1);
        }
    };

    return (
        <Pagination className='d-flex justify-content-center mt-5'>            
                { pageNumbers && pageNumbers.map(number => (
                        <Pagination.Item key={number} onClick = {() => pagination (number)}>
                            {number}
                            </Pagination.Item>
                ))}
        </Pagination>
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