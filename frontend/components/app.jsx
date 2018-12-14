import React from 'react';
import { Link } from 'react-redux';
import NavBarContainer from './navbar/navbar_container';
import './app.less';

const App = ({children}) => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    {children}
  </div>
);


export default App;
