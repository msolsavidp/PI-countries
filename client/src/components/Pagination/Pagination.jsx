import React from "react";
import s from './Pagination.module.css';

export default function Pagination ({countriesPerPage, allCountries, pagination}) {
    const pageNumbers = [];

    //recorro jun arreglo que tomo el numero que resulta de dividir todos los países por la cantidad de países por pagina y lo pusheo en page Numbers
    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
        <nav className={s.contpag}>
            <ul>
                { pageNumbers && pageNumbers.map(number => (
                    // <li key={number}>
                        <button className={s.botpag} key={number} onClick = {() => pagination (number)}>{number}</button>
                    // </li>
                ))
            }
            </ul>
        </nav>
        </div>
    )
};