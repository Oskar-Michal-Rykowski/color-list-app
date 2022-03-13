import React from 'react';
import PropTypes from 'prop-types';

import styles from './List.module.scss';

const List = () => (
  <div className={styles.list}>
    <h1>List</h1>
  </div>
);

List.propTypes = {
  children: PropTypes.node,
};

export default List;
