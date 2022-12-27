import axios from 'axios';
import { GET_COUNTRIES, GET_COUNTRY_DETAIL, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER_BY_NAME, ORDER_BY_POPULATION, CREATE_ACTIVITY, GET_BY_NAME, GET_ACTIVITIES} from '../action-types'

export function getCountries () {
    return async function(dispatch) {
        var countries = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        });
    };
}; 

export function getCountryDetail (id){
    return async function(dispatch){
        try {
            let countryDetail = await axios.get(`http://localhost:3001/countries/${id}`)
            console.log(countryDetail.data)
            return dispatch({
                type: GET_COUNTRY_DETAIL,
                payload: countryDetail.data
            })
        } catch (e) {
            console.log(e)
        }
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

export function getActivities (){
    return async function (dispatch){
        let activities = await axios.get('http://localhost:3001/activities')
        console.log(activities.data)
        return dispatch({
            type: GET_ACTIVITIES,
            payload: activities.data
        });
    };
};

export function createActivity (payload) {
    return async function (dispatch){
        let activity = await axios.post('http://localhost:3001/activities', payload);
        console.log(activity)
        // return dispatch({
        //     type: CREATE_ACTIVITY,
        //     payload: activity.data
        // });
        return activity;
}};


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