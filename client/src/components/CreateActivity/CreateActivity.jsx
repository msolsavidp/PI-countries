import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createActivity, getCountries, getActivities } from "../../Redux/actions";
import NavBar from "../NavBar/NavBar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Toast } from 'react-bootstrap';
import './CreateActivity.css';

function validate (input){
    let errors = {};

    if (!input.name){
        errors.name = 'The activity requires a name.';
    } else if (!input.difficulty){
        errors.difficulty = 'You need to choose a difficulty'
    } else if (!input.duration){
        errors.duration ='The activity requires a duration'
    } else if (!input.season){
        errors.season = 'You need to choose a season for the activity.'
    } else if (!input.country || input.country.length === 0){
        errors.country = 'You need to choose a country.'
    };
    return errors;
};

export default function CreateActivity ({setCurrentPage}) {
    const dispatch = useDispatch ();
    const history = useHistory();
    const countries = useSelector(state => state.countries);
    const [showToast, setShowToast] = useState(false);
    const toggleShowToast = () => setShowToast(!showToast);

    let orderedCountries = countries.sort(function(a, b) {
        if (a.name > b.name){
            return 1;
        }
        if (b.name > a.name){
            return -1
        }
        return 0;
    });


    const [errors, setErrors] = useState({});
    const [input, setInput] = useState ({
        name: '', 
        difficulty: '', 
        duration: '', 
        season: '', 
        country: []
    });

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]);

    const handleChange = (e) => {
        setErrors(
            validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        setInput({
            ...input,
        [e.target.name] : e.target.value
        });
        console.log(input);
    };

    const handleSelect = (e) =>{
        if (e.target.name === 'difficulty'){
            setInput({
                ...input,
                difficulty: e.target.value
            });
            setErrors(validate({
                ...input,
                difficulty: e.target.value
            }));
        } else {
            setInput({
                ...input,
                country: [...input.country, e.target.value]
            });
            setErrors(validate({
                ...input,
                country: e.target.value
            }));
        }
    };

    //CHECKEAR
    const handleDelete = (ev, el) => {
        ev.preventDefault()
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        if( input.name === '' || input.difficulty === '' || input.duration === '' || input.season === '' || input.country.length === 0)
        return alert ('You need to complet all the fields.');

        dispatch(createActivity(input));
        toggleShowToast();
        setInput({
            name: '', 
            difficulty: '', 
            duration: '', 
            season: '', 
            country: []
        });
        setTimeout(() => {
            history.push('/home');
          }, 2000);
    };

    return (
        <div className="backgroundActivity">
            <NavBar setCurrentPage={setCurrentPage}/>
            
            <div className="containerActivity">
            <h1>Create an activity</h1>

            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formActivity">
                    <Form.Label>Touristic activity: </Form.Label>
                    <Form.Control type='text' placeholder='Write the touristic activity' value={input.name} name='name' onChange = {(e) => handleChange(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDifficulty">
                    <Form.Label>Difficulty: </Form.Label>
                    <Form.Select name= 'difficulty' value={input.difficulty} onChange = {(e) => handleSelect(e)}>
                        <option value= '1'>Super easy</option>
                        <option value= '2'>Easy</option>
                        <option value= '3'>Medium</option>
                        <option value= '4'>Hard</option>
                        <option value= '5'>Super hard</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDuration">
                    <Form.Label>Duration: </Form.Label>
                    <Form.Control type='number' placeholder='How many hours can you practise it?' value={input.duration} name='duration' onChange = {(e) => handleChange(e)} min='1' max='24' />
                </Form.Group>
                
                
                <Form.Group className="mb-3" controlId="formDuration">
                    <Form.Label>Season: </Form.Label>
                    <div key="inline-radio" className="mb-3">
                        <Form.Check  inline type='radio' label='Spring' id= 'Spring' value='Spring' name='season' onChange={(e) => handleChange(e)}/>
                        <Form.Check  inline type='radio' label='Summer' value='Summer' id= 'Summer' name='season' onChange={(e) => handleChange(e)}/>
                        <Form.Check  inline type='radio' label='Fall' value='Fall' name='season' id= 'Fall' onChange={(e) => handleChange(e)}/>
                        <Form.Check  inline type='radio' label='Winter' value='Winter' name='season' id= 'Winter' onChange={(e) => handleChange(e)}/>
                    </div>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formCountry">
                    <Form.Label>Country: </Form.Label>
                    <Form.Select name='country' onChange={ (e)=>handleSelect(e) }>
                    {orderedCountries.map((c) => (
                        <option value= {c.name}>{c.name}</option>
                    ))}
                    </Form.Select>   

                    {
                        input.country.map( c =>(
                            <div>
                                <p>{c}</p>
                                <button key='delete' onClick={(e) => handleDelete(e,c)}>X</button>
                            </div>
                        ))
                    }
                </Form.Group>

                <Button variant= "outline-dark" key='submit' type='submit'  name='submit' > Submit </Button>

                {showToast && (
                    <Toast className='toast prefers-reduced-motion: no-preference' show={showToast} onClose={toggleShowToast} delay={2000} autohide>
                        <Toast.Header>
                            {/* <img src={process.env.PUBLIC_URL + "/favicon.ico"} className="rounded me-2" alt="brand logo" /> */}
                            <strong className="me-auto">Countries App</strong>
                            <small>just now</small>
                        </Toast.Header>
                        <Toast.Body>You've created a touristic activity!</Toast.Body>
                    </Toast>
                )}

                {errors.name && ( <p className="errors">{errors.name}</p>)}
                {errors.difficulty && ( <p className="errors">{errors.difficulty}</p>)}
                {errors.duration && ( <p className="errors">{errors.duration}</p>)}
                {errors.country && ( <p className="errors">{errors.country}</p>)}
                {errors.season && ( <p className="errors">{errors.season}</p>)}
            </Form>
            </div>
        </div>
    )


};














    // const handleDifficulty = (e) => {
    //     setInput({
    //         ...input,
    //         difficulty: e.target.value
    //     });
    //     setErrors(validate({
    //         ...input,
    //         difficulty: e.target.value
    //     }));
    // };


                //     {/* <div>
                //     <label>Difficulty(Easy - Super Hard):</label>
                //     <input type= 'range' name='difficulty' min = '1' max= '5' value={input.difficulty} onChange={ (e)=>handleChange(e) }/>
                //     {/* {errors.difficulty && (
                //     <p>{errors.difficulty}</p> */}
                // {/* )} */}
                // {/* </div> */}

                    // const handleDifficultySelect = (e) =>{
    //     setInput({
    //         ...input,
    //         difficulty: e.target.value
    //     });
    //     setErrors(validate({
    //         ...input,
    //         difficulty: e.target.value
    //     }));
    // };

        // const handleCheck = (e) => {
    //     if (e.target.checked){
    //     setInput({
    //         ...input,
    //         season: e.target.value
    //     });
    //     setErrors(
    //         validate({
    //         ...input,
    //         [e.target.name]: e.target.value
    //     }));
    //     };
    // };