import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createActivity, getCountries, getActivities } from "../../Redux/actions";
import s from './CreateActivity.module.css';

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

export default function CreateActivity () {
    const dispatch = useDispatch ();
    const history = useHistory();
    const countries = useSelector(state => state.countries);

    let orderedCountries = countries.sort(function(a, b) {
        if (a.name > b.name){
            return 1;
        }
        if (b.name > a.name){
            return -1
        }
        return 0;
    });

    // console.log(orderedCountries);

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

    const handleDelete = (ev, el) => {
        ev.preventDefault()
        setInput({
            ...input,
            country: input.country.filter(c => c !== el)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        if( input.name === '' || input.difficulty === '' || input.duration === '' || input.season === '' || input.country.length === 0)
        return alert ('You need to complet all the fields.');

        dispatch(createActivity(input));
        alert('Activity created!');
        setInput({
            name: '', 
            difficulty: '', 
            duration: '', 
            season: '', 
            country: []
        });
        history.push('/home');
    };

    return (
        <div className={s.backgr}>
            <div className={s.container}>
            <h1>Create an activity</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Touristic activity: </label>
                    <input type='text' placeholder='Activity...' value={input.name} name='name' onChange = {(e) => handleChange(e)}/>
                </div>

                <div>
                    <label>Difficulty: </label>
                    <select name= 'difficulty' value={input.difficulty} onChange = {(e) => handleSelect(e)}>
                        <option value= '1'>Super easy</option>
                        <option value= '2'>Easy</option>
                        <option value= '3'>Medium</option>
                        <option value= '4'>Hard</option>
                        <option value= '5'>Super hard</option>
                    </select>

                </div>

                <div>
                    <label>Duration: </label>
                    <input type='number' placeholder='Number' value={input.duration} name='duration' onChange = {(e) => handleChange(e)} min='1' max='24' />
                </div>
                

                <div>
                    <label>Season: </label>
                        <label>
                        <input type='radio' 
                        id= 'Spring' value='Spring' name='season' onChange={(e) => handleChange(e)}/>
                        Spring
                        </label>
                        <label>
                        <input type='radio' value='Summer' id= 'Summer' name='season' onChange={(e) => handleChange(e)}/>
                        Summer
                        </label>
                        <label>
                        <input type='radio' value='Fall' name='season' id= 'Fall' onChange={(e) => handleChange(e)}/>
                        Fall
                        </label>
                        <label>
                        <input type='radio' value='Winter' name='season' id= 'Winter' onChange={(e) => handleChange(e)}/>
                        Winter
                        </label>

                </div>

                <div>
                    <label>Country: </label>
                    <select name='country' onChange={ (e)=>handleSelect(e) }>
                    {orderedCountries.map((c) => (
                        <option value= {c.name}>{c.name}</option>
                    ))}
                    </select>   

                    {
                        input.country.map( c =>(
                            <div>
                                <p>{c}</p>
                                <button key='delete' onClick={(e) => handleDelete(e,c)}>X</button>
                            </div>
                        ))
                    }
                </div>

                <input className={s.button} key='submit' type='submit'  name='submit' />

                {errors.name && ( <p className={s.errors}>{errors.name}</p>)}
                {errors.difficulty && ( <p className={s.errors}>{errors.difficulty}</p>)}
                {errors.duration && ( <p className={s.errors}>{errors.duration}</p>)}
                {errors.country && ( <p className={s.errors}>{errors.country}</p>)}
                {errors.season && ( <p className={s.errors}>{errors.season}</p>)}
            </form>
            <Link to='/home'>
                <button className={s.button}>Return Home</button>
            </Link>
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