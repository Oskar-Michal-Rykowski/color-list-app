import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';
// import { Header } from '../Header/Header';

const Header = () => (
  <header className="App-header">
    <h1>Color List App</h1>
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
