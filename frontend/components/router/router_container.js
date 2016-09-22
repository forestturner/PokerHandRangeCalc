import { connect } from 'react-redux';
import AppRouter from './router';
// import {requestFuton, requestFutons} from '../../actions/futon_actions';
// import {requestUser, requestUsers} from '../../actions/user_actions';
// import {requestBookings} from '../../actions/booking_actions';


const mapStateToProps = state => ({
  // currentUser: state.session.currentUser,


});

const mapDispatchToProps = dispatch => ({
  // initGrids: () => dispatch(initGrids())
  // requestFuton: id => dispatch(requestFuton(id)),
  // requestFutons: () => dispatch(requestFutons()),
  // requestUser: id => dispatch(requestUser(id)),
  // requestUsers: () => dispatch(requestUsers()),
  // requestBookings: () => dispatch(requestBookings())

});

// requestBookings: () => dispatch(requestBookings())
//
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   // const formType = ownProps.location.pathname.slice(1);
//   // return {formType};
//   //
//
//
//   return {
//     processForm: user => dispatch(processForm(user)),
//     formType
//   };
// };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
