import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const Form = () => (
  <div className={styles.form}>
    <h1>Form</h1>
  </div>
);

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
