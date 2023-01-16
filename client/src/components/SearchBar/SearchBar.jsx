import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getByName } from "../../Redux/actions";
import s from './SearchBar.module.css';

export default function SearchBar ({setCurrentPage}){
    
    const dispatch = useDispatch();
    const [country, setCountry] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
        setCountry(e.target.value);
        console.log(country);
        // setCurrentPage(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getByName(country));
        setCurrentPage(1);
    };

    return (
        <div>
            <input className= {s.search} type='text' placeholder="Type the country..." onChange = {(e) => handleInput(e)}/>
            <button className={s.bot} type='submit' onClick={(e) => {handleSubmit(e)}}> Search </button>
        </div>
    )

};