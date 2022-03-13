import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';
import ColorPicker from '../../features/ColorPicker/ColorPicker';

const Form = ({ handleNewColor }) => {
  return (
    <div className={styles.form}>
      <h1>Form</h1>
      <ColorPicker handleNewColor={handleNewColor} />
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
