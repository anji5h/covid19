import { combineReducers } from "redux";
import worldReducer from "./worldReducer";
import countryReducer from "./countryReducer";
import graphReducer from "./graphReducer";

export default combineReducers({
  world: worldReducer,
  country: countryReducer,
  graph: graphReducer,
});
