function _fetchLocation(input) {
  return fetch(`/search_start/${input}`)
  .then(res => res.json())
  .then(locations => locations.predictions)
}

export function fetchStartingLocation(input) {
  console.log(input)
    return (dispatch) => {
      dispatch({ type: 'FETCHING_SUGGESTED_START_LOCATIONS' });

      _fetchLocation(input).then(suggestedStartingLocations =>
    dispatch({ type: 'DISPLAY_START_LOCATIONS',
    suggestedStartingLocations }));
  };
}

export function fetchDropOff(input) {
  console.log(input)
    return (dispatch) => {
      dispatch({ type: 'FETCHING_SUGGESTED_DROPOFF' });
      _fetchLocation(input).then(suggestedDropOffs => 
    dispatch({ type: 'DISPLAY_DROPOFFS', suggestedDropoffs
    }));
  };
}