import React from 'react';
import PropTypes from 'prop-types';

import styles from './ColorPicker.module.scss';

const ColorPicker = ({ value, handleNewColor }) => {
  const [color, updateColor] = React.useState('#FF0000');

  const handleColor = (e) => {
    updateColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewColor(color);
  };
  return (
    <div className={styles.picker}>
      <form onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleColor} />
        <input type="text" value={color} onChange={handleColor} />
        <input type="submit" value="ADD TO LIST" />
      </form>
    </div>
  );
};

ColorPicker.propTypes = {
  children: PropTypes.node,
};

export default ColorPicker;
