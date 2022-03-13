import React, { FunctionComponent } from 'react';

import styles from './List.module.scss';

interface Props  {
  list: string[],
  removingFunction: (string) => void,
};

const List: FunctionComponent<Props> = ({ list, removingFunction }) => {
  const handleClick = (color: string)  => {
    removingFunction(color);
  };

  return (
    <div className={styles.list}>
      <h1>List</h1>
      <div>
        {list.map((color) => (
          <div className={styles.rectangle}>
            <input
              className={styles.color}
              type="color"
              value={color}
              disabled
            />
            <h2>{color}</h2>
            <button
              className={styles.button}
              onClick={() => handleClick(color)}
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
