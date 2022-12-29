import React from "react";
import { Link } from 'react-router-dom';
import s from './LandingPage.module.css';

export default function LandingPage() {
    return (
        <div className={s.backgr}>
            <div className={s.title}>
                <h1>Countries' API</h1>
            </div>
            <div>
                <Link to ='/home'>
                <button className={s.button}>Go home</button>
            </Link>
            </div>
        </div>
    )
};