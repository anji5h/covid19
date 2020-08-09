export default (state = {}, action) => {
  if (action.type === "GRAPH_DATA") {
    return { ...action.payload };
  } else return state;
};
