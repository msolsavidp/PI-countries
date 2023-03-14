import React from "react";
import { Card, Button, Badge } from 'react-bootstrap';
import './CountryCard.css'

export default function CountryCard ({id, name, image, continent}) {
    console.log(id)
    return (
        <Card className="cardWine" style={{ width: '15rem', height: '20rem' }}>
            <Card.Img variant="top" src={image} alt='country_image'/>
            <Card.Body className="d-flex flex-column align-items-center justify-content-evenly">
                <Card.Title style={{ fontSize: "24px" }}><strong>{name}</strong></Card.Title>
                <div className='d-flex ms-2 me-2 gap-2'>
                    <Card.Text className="text-center" style={{ fontSize: '12px' }}>{continent}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

