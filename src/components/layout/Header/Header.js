import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <h1>Color List App</h1>
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
