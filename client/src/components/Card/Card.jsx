import React from "react";

export default function Card ({id, name, image, continent}) {
    console.log(id)
    return (
        <div>
                <h3>{name}</h3>
            <h5>{continent}</h5>
            <img src={image} alt='country_image'/>
        </div>
    );
};

// module.exports = {
//     Card
// }