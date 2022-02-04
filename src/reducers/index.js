import { combineReducers } from 'redux';

const selectedYearReducer = (selectedYear = null, action) => {
  if ((action.type === 'YEAR_SELECTED') && ((action.payload >= 1910) && (action.payload <= 2022))) {
    return action.payload;
  }

  return selectedYear;
};

const selectedMoviesReducer = (selectedMovies = [], action) => {
  if (action.type === 'MOVIES_SELECTED') {
    return action.payload;
  }

  return selectedMovies;
};

export default combineReducers({
  year : selectedYearReducer,
  movies : selectedMoviesReducer

});
