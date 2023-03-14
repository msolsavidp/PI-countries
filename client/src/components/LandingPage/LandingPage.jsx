import React from "react";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './LandingPage.css';

export default function LandingPage() {
    return (
            <div className="video-background">
                <video autoPlay muted loop>
                    <source src="https://res.cloudinary.com/db2uxwhbq/video/upload/v1678759942/tierra-1393_1_mb37my.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <h1>Countries App</h1>
                    <Link to ='/home'>
                    <Button variant="outline-light">Go home</Button>
                    </Link>
                </div>
        </div>
    )
};