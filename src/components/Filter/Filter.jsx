import React, { useState } from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = ({ changeAction }) => {
  const [name, setName] = useState('');

  const changeHandler = event => {
    // this.setState({
    //   name: event.currentTarget.value,
    // });
    // this.props.changeAction(event.currentTarget.value);
    const formValue = event.currentTarget.value;
    setName(formValue);
    changeAction(formValue);
  };

  // render() {
  return (
    <div className={css.container}>
      <strong>Find contacts by name</strong>
      <input
        id="filter"
        type="text"
        name="filter"
        value={name}
        onChange={changeHandler}
        className={css.input}
      />
    </div>
  );
  // }
};

Filter.propTypes = {
  changeAction: PropTypes.func,
};

export { Filter };
