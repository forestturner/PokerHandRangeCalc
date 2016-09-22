
import React from 'react';
import { Link, hashHistory } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,Button} from 'react-bootstrap';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        //  lat: this.props.coords.lat,
        //  lng: this.props.coords.lng,
        //  location: ""
       };

    // this.handleGuest = this.handleGuest.bind(this);
    // this.search = this.search.bind(this);
    // this.updateSearch = this.updateSearch.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.navbar = this.navbar.bind(this);
  }

  // handleGuest(e) {
	// 	const user = {user: {username: "Guest",password:"password1"}};
	// 	this.props.logIn(user);
	// }

  componentDidUpdate() {
    // let input = document.getElementById('nav-search')
    // let options = {types: ['(cities)']};
    // this.autocomplete = new google.maps.places.Autocomplete(input, options);
    // this.autocomplete.addListener('place_changed', this.search);
  }

  // search() {
  //   let place = this.autocomplete.getPlace();
  //   this.setState({
  //     lat: place.geometry.location.lat(),
  //     lng: place.geometry.location.lng(),
  //     location: ""
  //   });
  //   this.props.updateCoords(this.state);
  //   hashHistory.push("/futons");
  // }
  // updateSearch(e) {
  //   this.setState({location: e.target.value});
  // }
  // handleSubmit(e) {
  //   e.preventDefault();
  // }

  handleOpenModal(modal) {
    this.setState({ showModal: true, modal: modal });
  }

  handleCloseModal() {
     this.setState({ showModal: false });
   }







  navbar(){


    return (
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a className="active" href="#about">About</a></li>
    </ul>

    )


    // return (
    //   <Navbar inverse>
    //     <Navbar.Header>
    //       <Navbar.Brand>
    //         <a href="#">PokerHandRangeCalculator</a>
    //       </Navbar.Brand>
    //       <Navbar.Toggle />
    //     </Navbar.Header>
    //   </Navbar>
    // );
  }
  // navbarInstanceLoggedin(currentUser, logout){
  //
  //
  //
  //   return (
  //     <Navbar inverse>
  //       <Navbar.Header>
  //         <Navbar.Brand pullLeft>
  //           <a href="#">FutonSurfing</a>
  //
  //         </Navbar.Brand>
  //         <Nav pullLeft >
  //           <img className="img-nav" src={currentUser.profile_img_url} alt=""></img>
  //         </Nav>
  //         <Navbar.Toggle />
  //       </Navbar.Header>
  //       <Navbar.Collapse>
  //         <Nav pullRight>
  //           {/* <NavItem eventKey={1} >{currentUser.username}</NavItem> */}
  //
  //           <Link className="btn btn-primary join" to="/profile">Dashboard</Link>
  //           <Link to="/" className="btn btn-warning join" onClick={logout}>Log Out</Link>
  //           <Link to="/futons" className="btn btn-info join">Futons</Link>
  //           {/* <Button className="header-button" onClick={logout}>Log Out</Button> */}
  //         </Nav>
  //         <Nav pullRight>
  //           <form className="nav-search" onSubmit={this.handleSubmit} >
  //             <input type="text" id="nav-search" placeholder="Search by city.." value={this.state.location} onChange={this.updateSearch} />
  //           </form>
  //         </Nav>
  //       </Navbar.Collapse>
  //
  //     </Navbar>
  //   );
  // }
  render() {
    return(
      <div></div>
    // this.navbar()
  );
    // let currentUser = this.props.currentUser;
    // let logout = this.props.logOut;
    // let guestUser = {user:{username:"Guest",password:"password1"}};
    // let loginGuest = this.props.logIn(guestUser);
    // if (currentUser){
    //   return this.navbarInstanceLoggedin(currentUser, logout);
    // } else {
    //   return this.navbarInstanceSession();
    // }
  }
}
export default NavBar;





// {/* <Navbar.Collapse>
//   <Nav pullRight>
//
//   {/* <Link to="/signup" className="btn btn-primary join"> Join </Link> */}
//   {/* <Link to="/profile" className="btn btn-warning join" onClick={this.handleGuest}>> Guest </Link> */}
//   {/* <Link to="/login" className="btn btn-warning join"> Log in</Link> */}
//   {/* <Link to="/futons" className="btn btn-info join">Futons</Link> */}
//   </Nav>
//   <Nav pullRight>
//   <form className="nav-search" onSubmit={this.handleSubmit} >
//   <input type="text" id="nav-search" placeholder="Search by city.." value={this.state.location} onChange={this.updateSearch} />
//   </form>
//   </Nav>
//
//   </Navbar.Collapse> */}
