import React from 'react';
import PropTypes from 'prop-types';

import styles from './List.module.scss';

const List = ({ list, removingFunction }) => {
  const handleClick = (color) => {
    removingFunction(color);
  };

  return (
    <div className={styles.list}>
      <h1>List</h1>
      <div>
        {list.map((color) => (
          <div>
            <input type="color" value={color} disabled />
            <h2>{color}</h2>
            <button onClick={() => handleClick(color)}>REMOVE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  children: PropTypes.node,
};

export default List;
