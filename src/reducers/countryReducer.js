export default (state = [], action) => {
  if (action.type === "COUNTRY_DATA") return [...action.payload];
  else return state;
};
