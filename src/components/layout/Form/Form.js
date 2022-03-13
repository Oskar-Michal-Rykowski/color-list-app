import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';
// import { Form } from '../Form/Form';

const Form = () => (
  <div className="App-Form">
    <h1>Form</h1>
  </div>
);

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
