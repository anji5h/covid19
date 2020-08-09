
export default (state = {}, action) => {
  if (action.type === "WORLD_DATA") return { ...action.payload };
  else return state;
};
