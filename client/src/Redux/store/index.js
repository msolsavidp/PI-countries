import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // npm i redux-revtools-extension
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


//Define una propiedad dentro de window y se configura la extensión de desarrollo para ir debuggeando y viendo qué pasa
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;