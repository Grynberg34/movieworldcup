export const selectYear = year => {
  return {
    type: 'YEAR_SELECTED',
    payload: year
  };
};
  

export const selectMovies = movies => {
  return {
    type: 'MOVIES_SELECTED',
    payload: movies
  };
};
  