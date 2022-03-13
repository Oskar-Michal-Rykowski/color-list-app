import React from 'react';
import ColorPicker from '../../features/ColorPicker/ColorPicker.tsx';

import styles from './Form.module.scss';

type Props = {
  handleNewColor: () => string[];
}

class Form extends React.Component<Props> {
  render() {
    const { handleNewColor } = this.props;
    return (
      <div className={styles.form}>
        <ColorPicker handleNewColor={handleNewColor} />
      </div>
    );
  }
}

export default Form;
