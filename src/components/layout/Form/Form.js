import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';
import ColorPicker from '../../features/ColorPicker/ColorPicker';

class Form extends React.Component {
  render() {
    const { handleNewColor } = this.props;
    return (
      <div className={styles.form}>
        <ColorPicker handleNewColor={handleNewColor} />
      </div>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
