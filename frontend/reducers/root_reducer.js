import {combineReducers} from 'redux';
import PokerGridReducer from './poker_grid_reducer';
// import FutonsReducer from './futon_reducer';
// import SessionReducer from './session_reducer';
// import UsersReducer from './user_reducer.js';
// import SearchReducer from './search_reducer';
// import FiltersReducer from './filters_reducer';
// import FormReducer from './form_reducer';
// import BookingReducer from './booking_reducer';
// import CoordsReducer from './coords_reducer';

export default combineReducers({
  grids: PokerGridReducer
  // futons: FutonsReducer,
  // session: SessionReducer,
  // users: UsersReducer,
  // search: SearchReducer,
  // filter: FiltersReducer,
  // bookings: BookingReducer,
  // coords: CoordsReducer

});
