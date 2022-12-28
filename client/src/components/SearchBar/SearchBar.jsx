import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getByName } from "../../Redux/actions";

export default function SearchBar ( ){
    
    const dispatch = useDispatch();
    const [country, setCountry] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
        setCountry(e.target.value);
        console.log(country);
        //VER
        // setCountry('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getByName(country));
                // setCountry('');
    };

    return (
        <div>
            <input type='text' placeholder="Type the country..." onChange = {(e) => handleInput(e)}/>
            <button type='submit' onClick={(e) => {handleSubmit(e)}}> Search </button>
        </div>
    )

};