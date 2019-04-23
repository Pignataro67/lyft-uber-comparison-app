function _fetchLocation(input) {
  return fetch(`RailsApi/search_locations/${input}`)
  .then(res => res.json())
  .then(locations => locations.predictions)
}

function _getLatLong(location) {
  // return new Promise((resolve, reject) => {
  //   geocoder.geocode(location, (error, data) => {
  //     try {
  //       if (error || !data.results || !data.results.length || !data.results[0].geometry) {
  //         console.log(data);
  //         if (data && data.status === 'OVER_QUERY_LIMIT') {
  //           reject('OVER_QUERY_LIMIT');
  //         }
  //         return resolve(false);
  //       }
  //       return resolve(data.results[0].geometry.location);
  //     } catch(e) {
  //       return resolve(false);
  //     }
  //   });
  // })
  return fetch(`RailsApi/confirm_route/convert_lat_long/${location}`)
  .then(res => res.json())
  .then(addressInfo => addressInfo.results[0].geometry.location)
}

export function fetchStartingLocation(input) {
  console.log(input)
    return (dispatch) => {
      dispatch({ type: 'CONVERTING_START_LAT_LONG' })
      return _getLatLong(location).then(({ lat, long}) => 
    dispatch({ type: 'RETRIEVE_START_LAT_LONG', startlat: lat, startLong: long}))
  };
}

export function fetchDropOff(input) {
  console.log(input)
    return (dispatch) => {
      dispatch({ type: 'FETCHING_SUGGESTED_DROPOFFS' });
      _fetchLocation(input).then(suggestedDropOffs => 
    dispatch({ type: 'DISPLAY_DROPOFFS', suggestedDropoffs
    }));
  };
}

export function convertPickupLatLong(location) {
  console.log(location)
  return (dispatch) => {
    dispatch({type: 'CONVERTING_PICKUP_LAT_LONG'})
    _getLatLong(location).then(startLatLong => dispatch({type: 'RETRIEVE_START_LAT_LONG', startLatLong}))
  }
}

export function convertDropoffLatLong(location) {
  console.log(location)
  return (dispatch) => {
    dispatch({type: 'CONVERTING_DROPOFF_LAT_LONG'})
    return _getLatLong(location).then(({ lat, long }) => dispatch({type: 'RETRIEVE_DROPOFF_LAT_LONG', dropoffLat: lat, dropOffLong: long }))
  }
}

export function convertLatLong(pickupLocation, dropoffLocation) {
  return async (dispatch) => {
    await dispatch(convertPickupLatLong(pickupLocation))
    await dispatch(convertDropoffLatLong(dropoffLocation))
  }
}

export function getMapboxKey() {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_MAPBOX_KEY'});
    fetch("RailsApi/confirm_route/mapbox")
    .then(res => res.text())
    .then(key => dispatch({ type: 'ADD_MAPBOX_KEY_TO_STATE', key }));
  };
}