import Axios from "axios";

export const getWorldData = () => async (dispatch) => {
  let response = await Axios.get("https://disease.sh/v3/covid-19/all");
  dispatch({
    type: "WORLD_DATA",
    payload: response.data,
  });
};

export const getCountryData = () => async (dispatch) => {
  let response = await Axios.get("https://disease.sh/v3/covid-19/countries");
  dispatch({
    type: "COUNTRY_DATA",
    payload: response.data,
  });
};

export const getGraphData = () => async (dispatch) => {
  let response = await Axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=30");
  dispatch({
    type: "GRAPH_DATA",
    payload: response.data,
  });
};
