import React from "react";
import s from './Card.module.css'

export default function Card ({id, name, image, continent}) {
    console.log(id)
    return (
        <div className={s.card}>
                <h3 className={s.countryName}>{name}</h3>
            <h5 className={s.continent}>{continent}</h5>
            <img className={s.flag} src={image} alt='country_image'/>
        </div>
    );
};

