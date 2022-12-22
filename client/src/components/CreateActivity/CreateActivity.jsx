import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createActivity } from "../../Redux/actions";

function validate (input){
    let errors = {};
    if (!input.name){
        errors.name = 'The activity requires a name.';
    } else if (!input.difficulty){
        errors.difficulty ='The activity requires a difficulty between 1-5'
    };
    return errors
};

export default function CreateActivity () {
    const dispatch = useDispatch ();
    const activities = useSelector(state => state.activities);

    const [input, setInput] = useState ({
        name: '', 
        difficulty: null, 
        duration: null, 
        season: '', 
        country: []
    });

    // useEffect(() => {

    // })

    return (
        <div>
            <Link to='/home'>
                <button>Return Home</button>
            </Link>

            <h1>Create an activity</h1>

            <form>
                <div>
                    <label>Name of the activity:</label>
                    <input type='text' placeholder='Activity...' value={input.name} name='name'/>
                </div>

                <div>
                    <label>Difficulty:</label>
                    <input type='number' placeholder='From 1-5' value={input.difficulty} name='difficulty'/>
                </div>

                <div>
                    <label>Duration:</label>
                    <input type='number' placeholder='Number' value={input.duration} name='duration'/>
                </div>

                <div>
                    <label>Duration:</label>
                    <input type='text' placeholder='Spring - Summer - Fall - Winter' value={input.season} name='season'/>
                </div>

                <div>
                    <label>Country:</label>
                    <input type='text' placeholder='country' value={input.country} name='country'/>
                </div>
            </form>
        </div>
    )


};


