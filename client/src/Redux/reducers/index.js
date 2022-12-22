import { GET_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER_BY_NAME, ORDER_BY_POPULATION, CREATE_ACTIVITY, GET_BY_NAME} from '../action-types';


const initialState = {
    countries: [],
    allCountries: [],
    activities: []
};

export default function rootReducer (state = initialState, action){
    switch (action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };

        case GET_BY_NAME:
            return {
                ...state,
                countries:action.payload
            };

        
        case CREATE_ACTIVITY:
            return{
                ...state
            };

        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const countriesFilteredByContinent = action.continent === 'All' ? allCountries : allCountries.filter (c => c.continent === action.continent);
            return {
                ...state,
                countries: countriesFilteredByContinent
            };

        case FILTER_BY_ACTIVITY:
            const countries = state.allCountries;
            const countriesFilteredByActivity = !action.activity ? countries : countries.filter (c => c.activity.toLowerCase() === action.activity.toLowerCase());
            return{
                ...state,
                countries: countriesFilteredByActivity
            };

        case ORDER_BY_NAME:
            let sortedList = action.order === 'country_asc' ? 
            state.countries.sort(function(a, b) {
                if (a.name > b.name){
                    return 1;
                }
                if (b.name > a.name){
                    return -1
                }
                return 0;
            }) : 
            state.countries.sort (function (a, b) {
                if (a.name > b.name){
                    return -1;
                }
                if (b.name > a.name){
                    return 1;
                }
                return 0;
            })
            return{
                ...state,
                countries: sortedList
            };

            case ORDER_BY_POPULATION:
                let sortedCountries = action.order === 'population_asc' ? state.countries.sort(function (a, b){
                    if (a.population > b.population){
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1
                    }
                    return 0;
                }) :
                state.countries.sort(function(a, b){
                    if (a.population > b.population){
                        return -1
                    }
                    if (b.population > a.population) {
                        return 1
                    }
                    return 0;
                })
                return {
                    ...state,
                    countries: sortedCountries
                };

        default: 
        return {...state};
    };

    
};