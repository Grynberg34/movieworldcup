import { combineReducers } from 'redux';

const selectedYearReducer = (selectedYear = null, action) => {
  if ((action.type === 'YEAR_SELECTED') && ((action.payload >= 1910) && (action.payload <= 2022))) {
    return action.payload;
  }

  return selectedYear;
};

export default combineReducers({
  selectedYearReducer : selectedYearReducer,
});
