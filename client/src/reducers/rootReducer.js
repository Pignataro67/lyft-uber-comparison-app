export default function rootReducer(state = {
  startingLocation: '', 
  dropOff: '',
  isFetchingStartingLocation: false,
  isFetchingDropOff: false,
  suggestedPickupLocations: [],
  suggestedDropOff: []
 }, action) {
  switch(action.type){
    case "FETCHING_SUGGESTED_START_LOCATIONS":
      return {...state, isFetchingStartingLocation: true, suggestedPickupLocations: []}
    case "DISPLAY_START-LOCATIONS":
      return {...state, isFetchingStartingLocation: false, suggestedPickupLocations: action.suggestedPickupLocations}
    default:
      return state
  }
}