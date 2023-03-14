import React, {useEffect} from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail, getActivities } from '../../Redux/actions';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import s from './CountryDetails.module.css';
import NavBar from '../NavBar/NavBar';

export default function CountryDetail ({id, setCurrentPage}){

    console.log(id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryDetail(id));
        dispatch(getActivities())
    }, [dispatch]);

    const myCountry = useSelector ((state) => state.countryDetail);
    const activities = useSelector ((state) => state.activities);
    // console.log(myCountry);
    // console.log(activities);
    // console.log(myCountry.activities)
    const [showActivityModal, setShowActivityModal] = useState(false);

    const handleShowActivityClick = (e) => {
        setShowActivityModal(true);
    };

    return (

        <div className={s.backr}>
            <NavBar setCurrentPage={setCurrentPage}/>
        <div className={s.detailCard}>
            <div className={s.container}>
            {
                myCountry ?
                <div>
                    <h1 className={s.name}>{myCountry.name}</h1>
                    <img className={s.flag} src={myCountry.image} alt={myCountry.name}/>
                    <h3 className={s.continent}>Continent: {myCountry.continent}</h3>
                    <h3 className={s.detail}>Capital: {myCountry.capital}</h3>
                    <h5 className={s.detail}>Subregion: {myCountry.subregion}</h5>
                    <h5 className={s.detail}>Population: {myCountry.population} inhabitants</h5>
                    <h5 className={s.detail}>Area: {myCountry.area} km2</h5>
                    <h5 className={s.detail}>Code: {myCountry.id}</h5>
                    <div>
            <Button variant="outline-light" onClick={(e) => handleShowActivityClick(e) }>Show touristic activities</Button>                
        </div>

                    <Modal show={showActivityModal} onHide={() => setShowActivityModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Touristic activities</Modal.Title>
                        </Modal.Header>

                        {myCountry.activities?.map(a => (
                        <>
                        <Modal.Body>
                            <p className={s.activityName}>Activity: {a.name}</p>
                            <p className={s.detail}>Diffitulty: {a.difficulty} (1 easy - 5 super hard)</p>
                            <p className={s.detail}>Duration: {a.duration} hours</p>
                            <p className={s.detail}>Season: {a.season}</p>
                        </Modal.Body>
                        <hr/>
                    </>
                        ))}     
                        <Modal.Footer>
                            <Link to='/activities'>
                            <Button variant="outline-success">Create touristic activity</Button>
                            </Link>
                            <Button variant="outline-danger" onClick={() => setShowActivityModal(false)}>
                                Close
                            </Button>
                        </Modal.Footer> 
                    </Modal>

                </div>
                
                : <p>Loading...</p>
            } 
            </div>

        </div>
        <div>
        </div>
    </div>

    )
};