import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination';

// import s from './Pagination.module.css';

export default function PaginationPage ({countriesPerPage, allCountries, currentPage, maxPageLimit, minPageLimit, onNextClick, onPrevClick, onPageChange }) {
    let pages = []

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pages.push(i)
    };

    // const nPages = Math.ceil (allCountries / countriesPerPage);


    const handlePrevClick = ()=>{
        onPrevClick();
    };

    const handleNextClick = ()=>{
        onNextClick();
    };

    const handlePageClick = (e)=>{
        onPageChange(Number(e.target.id));
    };

    const pageNumbers = pages.map(number => { 
                    if(number <= maxPageLimit  && number > minPageLimit) {
                        return(
                    <Pagination.Item key={number} id={number} onClick={handlePageClick} 
                        className={currentPage===number ? 'active' : null}>
                        {number}
                    </Pagination.Item>
                        );
                    }else{
                        return null;
                    }

                });

        // page ellipses
    let pageIncrementEllipses = null;
    if(pages.length > maxPageLimit){
        pageIncrementEllipses = <Pagination.Ellipsis onClick={handleNextClick}/>
    };

    let pageDecremenEllipses = null;
    if(minPageLimit >=1){
        pageDecremenEllipses = <Pagination.Ellipsis onClick={handlePrevClick}/> 
    };

    return (
        <Pagination className='d-flex justify-content-center'>            
                        <Pagination.Prev onClick={handlePrevClick} disabled={currentPage === pages[0]}/>
                    {pageDecremenEllipses}
                        {pageNumbers}
                    {pageIncrementEllipses}
                        <Pagination.Next onClick={handleNextClick} disabled={currentPage === pages[pages.length-1]}/>
        </Pagination>
    )
};
