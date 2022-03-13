import React from 'react';
import PropTypes from 'prop-types';

import styles from './List.module.scss';
// import { List } from '../List/List';

const List = () => (
  <div className="App-List">
    <h1>List</h1>
  </div>
);

List.propTypes = {
  children: PropTypes.node,
};

export default List;
