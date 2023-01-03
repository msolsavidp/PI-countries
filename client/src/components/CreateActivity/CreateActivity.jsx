import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createActivity, getCountries, getActivities } from "../../Redux/actions";

function validate (input){
    let errors = {};
    if (!input.name){
        errors.name = 'The activity requires a name.';
    } else if (!input.duration){
        errors.duration ='The activity requires a duration'
    } else if (!input.difficulty){
    //     errors.dufficulty = 'You need to choose a difficulty'
    // } else if (!input.season){
        errors.season = 'You need to choose a season for the activity.'
    } else if (input.country.length === 0){
        errors.country = 'You need to choose a country.'
    };
    return errors;
};

export default function CreateActivity () {
    const dispatch = useDispatch ();
    const history = useHistory();
    const activities = useSelector(state => state.activities);
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
    //Estado para manejar los checks
    // const [isChecked, setIsChecked] = useState(false);
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
        setInput({
            ...input,
        [e.target.name] : e.target.value
        });
        setErrors(
            validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        console.log(input);
    };

    const handleCheck = (e) => {
        if (e.target.checked){
        setInput({
            ...input,
            season: e.target.value
        });
        setErrors(
            validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        };
    };

    const handleSelect = (e) =>{
        setInput({
            ...input,
            country: [...input.country, e.target.value]
        });
        setErrors(validate({
            ...input,
            country: e.target.value
        }));
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

    const handleDelete = (el) => {
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
            difficulty: null, 
            duration: null, 
            season: '', 
            country: []
        });
        history.push('/home');
    };

    return (
        <div>
            <Link to='/home'>
                <button>Return Home</button>
            </Link>

            <h1>Create an activity</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Touristic activity:</label>
                    <input type='text' placeholder='Activity...' value={input.name} name='name' onChange = {(e) => handleChange(e)}/>
                    
                {errors.name && (
                    <p>{errors.name}</p>
                )}

                </div>


                <div>
                    <label>Difficulty(Easy - Super Hard):</label>
                    <input type= 'range' name='difficulty' min = '1' max= '5' value={input.difficulty} onChange={ (e)=>handleChange(e) }/>
                    {/* {errors.difficulty && (
                    <p>{errors.difficulty}</p> */}
                {/* )} */}
                </div>

                <div>
                    <label>Duration:</label>
                    <input type='number' placeholder='Number' value={input.duration} name='duration' onChange = {(e) => handleChange(e)}/>
                    {errors.duration && (
                    <p>{errors.duration}</p>
                )}
                </div>
                

                <div>
                    <label>Season:</label>
                        <label>
                        <input type='checkbox' 
                        id= 'Spring' value='Spring' name='Spring' onChange={(e) => handleCheck(e)}/>
                        Spring
                        </label>
                        <label>
                        <input type='checkbox' value='Summer' id= 'Summer' name='Summer' onChange={(e) => handleCheck(e)}/>
                        Summer
                        </label>
                        <label>
                        <input type='checkbox' value='Fall' name='Fall' id= 'Fall' onChange={(e) => handleCheck(e)}/>
                        Fall
                        </label>
                        <label>
                        <input type='checkbox' value='Winter' name='Winter' id= 'Winter' onChange={(e) => handleCheck(e)}/>
                        Winter
                        </label>
                        {errors.season && (
                    <p>{errors.season}</p>
                )}
                </div>

                <div>
                    <label>Country:</label>
                    <select name='country' onChange={ (e)=>handleSelect(e) }>
                    {/* <input type='text' placeholder='country' value={input.country} name='country' onChange = {(e) => handleChange(e)}/> */}
                    {orderedCountries.map((c) => (
                        <option value= {c.name}>{c.name}</option>
                    ))}
                    </select>
                    {/* <ul><li>{input.country.map(c => c + ', ')}</li></ul>
                    {errors.country && (
                    <p>{errors.country}</p>
                )} */}

                {
                    errors.country && (
                        <p>{errors.country}</p>
                )}

                    {
                        input.country.map( c =>(
                            <div>
                                <p>{c}</p>
                                <button onClick={() => handleDelete(c)}>X</button>
                            </div>
                        ))
                    }
                </div>

                <input type='submit'  name='submit' disabled={!input.name || !input.difficulty || !input.duration || input.country.length === 0 || !input.season}/>
            </form>
        </div>
    )


};


