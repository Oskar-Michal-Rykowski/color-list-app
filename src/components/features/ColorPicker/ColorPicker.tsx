import React, { FunctionComponent } from 'react';

import styles from './ColorPicker.module.scss';

type Handler = {
  handleNewColor: (string)=>string[]
}

const ColorPicker:  FunctionComponent<Handler> = ({handleNewColor}) => {
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
        <input
          className={styles.color}
          type="color"
          value={color}
          onChange={handleColor}
        />
        <input
          className={styles.text}
          type="text"
          value={color}
          onChange={handleColor}
          required
          pattern="#[A-Z0-9]{6}"
        />
        <input className={styles.submit} type="submit" value="ADD TO LIST" />
      </form>
    </div>
  );
};



export default ColorPicker;
