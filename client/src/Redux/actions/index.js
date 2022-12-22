import axios from 'axios';
import { GET_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER_BY_NAME, ORDER_BY_POPULATION, CREATE_ACTIVITY, GET_BY_NAME} from '../action-types'

export function getCountries () {
    return async function(dispatch) {
        var countries = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        });
    };
}; 

export function getByName (name) {
    return async function (dispatch){
        try {
            var country = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: GET_BY_NAME,
                payload: country.data
            })
        } catch (e) {
            console.log(e);
        }
    };
};

export async function createActivity (payload) {
    return async function (dispatch){
    try{
        let activity = await axios.post('http://localhost:3001/activities', payload);
        console.log(activity)
        return dispatch({
            type: CREATE_ACTIVITY,
            payload: activity.data
        });
    } catch (e) {
        console.log(e)
    }}
};


export function filterByContinent (continent) {
    // console.log(continent)
    return {
        type: FILTER_BY_CONTINENT,
        continent
    };
};

export function filterByActivity (activity) {
    console.log(activity)
    return {
        type: FILTER_BY_ACTIVITY,
        activity
    };
};

export function orderByName (order) {
    return {
        type: ORDER_BY_NAME,
        order
    };
};

export function orderByPopulation (order) {
    return {
        type: ORDER_BY_POPULATION,
        order
    };
};

// module.exports = {
//     getCountries
// }