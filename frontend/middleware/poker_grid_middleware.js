// import { BookingConstants, receiveBookings, receiveBooking, receiveBookingErrors, requestBookings } from '../actions/booking_actions';
// import { fetchBookings, fetchBooking, deleteBooking } from '../util/booking_util';
//
// 
// import {PokerConstants} from '../actions/poker_actions';
// import {}



// const BookingMiddleware = ({getState, dispatch}) => next => action => {
//   let success;
//   let errors;
//   switch (action.type) {
//     case BookingConstants.REQUEST_BOOKINGS:
//       success = (bookings) => dispatch(receiveBookings(bookings));
//       errors = (errors) => dispatch(receiveBookingErrors(errors.responseJSON));
//       fetchBookings(success, errors);
//       return next(action);
//     case BookingConstants.CREATE_BOOKING:
//       success = (booking) => dispatch(receiveBooking(booking));
//       errors = (errors) => dispatch(receiveBookingErrors(errors.responseJSON));
//       fetchBooking(action.booking, success, errors);
//       return next(action);
//     case BookingConstants.DELETE_BOOKING:
//       success = () => dispatch(requestBookings());
//       errors = (errors) => console.log(errors);
//       deleteBooking(action.id, success, errors);
//       return next(action);
//     default:
//       return next(action);
//   }
// };
//
// export default BookingMiddleware;
