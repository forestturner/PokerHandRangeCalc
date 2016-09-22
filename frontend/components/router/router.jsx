import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import App from '../app';
import PokerPageContainer from '../hand_range/poker_hand_range_container.js';

// import navbarContainer from '../navbar/navbar_container.js'
// import SessionFormContainer from '../session_form/session_form_container';
// import ProfileContainer from '../profile/profile_container';
// import SplashPageContainer from '../splashPage/splash_container';
// import FutonShowContainer from '../futon_show/futon_show_container';
// import FutonsShowContainer from '../futon_all/futons_show_container';
// import UserShowContainer from '../user_show/user_show_container';
// import UsersShowContainer from '../user_all/users_show_container';
// import EditProfileContainer from '../profile/edit_profile_container';
// import EditFutonContainer from '../futon_show/edit_futon_container';
// import RequestBookingsContainer from '../request_booking/request_booking_container';
// import CreateFutonContainer from '../createFuton/createFutonContainer';


class AppRouter extends React.Component{
  constructor(props){
    super(props);
    // this.initGrids = this.initGrids.bind(this);
    // this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    // this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    // this.getFuton = this.getFuton.bind(this);
    // this.getFutons = this.getFutons.bind(this);
    // this.getUser = this.getUser.bind(this);
    // this.getUsers = this.getUsers.bind(this);
    // this.getBookings = this.getBookings.bind(this);
  }

  // _ensureLoggedIn(nextState, replace){
  //   const currentUser = this.props.currentUser;
  //   if (!currentUser) {
  //     replace('/login');
  //   }
  // }
//
//   _redirectIfLoggedIn(nextState, replace){
//     const currentUser = this.props.currentUser;
//     if (currentUser) {
//       replace('/profile');
//     }
// }
//   getFuton(nextState, replace) {
//     const currentUser = this.props.currentUser;
//
//     this.props.requestFuton(currentUser.id);
//     this.props.requestUser(currentUser.id);
//
//   }
//  getFutons(nextState,replace) {
//    this.props.requestFutons()
//  }
//
//  getUser(nextState, replace) {
//    const currentUser = this.props.currentUser;
//
//    this.props.requestUser(currentUser.id);
//
//  }
// getUsers(nextState,replace) {
//   this.props.requestUsers()
// }
//
// getBookings(nextState, replace) {
//     this.props.requestBookings();
//
// }

// initGrids(nextState, replace){
//   this.props.createOpponentGrid();
//   this.props.createHeroGrid();
//   this.props.createTableGrid();
// }
//



  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component= {PokerPageContainer} />
        </Route>
      </Router>
    );
  }
}

export default withRouter(AppRouter);



// {/* <Route path="login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
// <Route path="signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
// <Route path="guest" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
// <Route path="futons" component={ FutonsShowContainer} onEnter ={this.getFutons }/>
// <Route path="futons/:futonId" component={FutonShowContainer} onEnter={this.getFuton}/>
//
// <Route path="/futons/:futonId/request" component={RequestBookingsContainer} />
//
// <Route path="users" component={ UsersShowContainer} onEnter ={this.getUsers }/>
// <Route path="users/:userId" component={UserShowContainer} onEnter={this.getUser}/>
//
// <Route path="profile" component={ProfileContainer}/>
// <Route path="createfuton" component={CreateFutonContainer}/>
// <Route path="editprofile" component={EditProfileContainer} onEnter = {this.getFutons}/>
// <Route path="editfuton" component={EditFutonContainer} onEnter = {this.getFutons}/> */}
