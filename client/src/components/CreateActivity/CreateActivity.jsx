import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createActivity, getCountries } from "../../Redux/actions";

function validate (input){
    let errors = {};
    if (!input.name){
        errors.name = 'The activity requires a name.';
    } else if (input.difficulty<1 || input.difficulty>5){
        errors.difficulty ='The activity requires a difficulty between 1-5'
    } else if (!input.country){
        errors.country = 'You need to choose a country.'
    };
    return errors
};

export default function CreateActivity () {
    const dispatch = useDispatch ();
    const history = useHistory();
    const activities = useSelector(state => state.activities);
    const countries = useSelector(state => state.countries);

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState ({
        name: '', 
        difficulty: null, 
        duration: null, 
        season: '', 
        country: []
    });

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const handleChange = (e) => {
        setInput({
            ...input,
        [e.target.name] : e.target.value
        });
        setErrors(validate({
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
        })
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

    const handleDifficulty = (e) => {
        setInput({
            ...input,
            difficulty: e.target.value
        });
        setErrors(validate({
            ...input,
            difficulty: e.target.value
        }));
    };

    const handleDelete = (el) => {
        setInput({
            ...input,
            country: input.country.filter(c => c !== el)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
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
                    <label>Name of the activity:</label>
                    <input type='text' placeholder='Activity...' value={input.name} name='name' onChange = {(e) => handleChange(e)}/>
                    
                {errors.name && (
                    <p>{errors.name}</p>
                )}

                </div>


                <div>
                    <label>Difficulty:</label>
                    <select name='difficulty' onChange={ (e)=>handleDifficulty(e) }>
                        <option value= {1}>1</option>
                        <option value= {2}>2</option>
                        <option value= {3}>3</option>  
                        <option value= {4}>4</option>  
                        <option value= {5}>5</option> 
                    </select>
                    {errors.difficulty && (
                    <p>{errors.difficulty}</p>
                )}
                </div>

                <div>
                    <label>Duration:</label>
                    <input type='number' placeholder='Number' value={input.duration} name='duration' onChange = {(e) => handleChange(e)}/>
                </div>

                <div>
                    <label>Season:</label>
                        <label>
                        <input type='checkbox' value='Spring' name='Spring' onChange={(e) => handleCheck(e)}/>
                        Spring
                        </label>
                        <label>
                        <input type='checkbox' value='Summer' name='Summer' onChange={(e) => handleCheck(e)}/>
                        Summer
                        </label>
                        <label>
                        <input type='checkbox' value='Fall' name='Fall' onChange={(e) => handleCheck(e)}/>
                        Fall
                        </label>
                        <label>
                        <input type='checkbox' value='Winter' name='Winter' onChange={(e) => handleCheck(e)}/>
                        Winter
                        </label>
                </div>

                <div>
                    <label>Country:</label>
                    <select name='country' onChange={ (e)=>handleSelect(e) }>
                    {/* <input type='text' placeholder='country' value={input.country} name='country' onChange = {(e) => handleChange(e)}/> */}
                    {countries.map((c) => (
                        <option value= {c.name}>{c.name}</option>
                    ))}
                    </select>
                    {/* <ul><li>{input.country.map(c => c + ', ')}</li></ul>
                    {errors.country && (
                    <p>{errors.country}</p>
                )} */}

                    {
                        input.country.map( c =>(
                            <div>
                                <p>{c}</p>
                                <button onClick={() => handleDelete(c)}>X</button>
                            </div>
                        ))
                    }
                </div>

                <button type='submit'>Create activity</button>
            </form>
        </div>
    )


};


