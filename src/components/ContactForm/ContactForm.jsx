import React, { useState } from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

const ContactForm = ({submitAction}) => {
  // state = {
  //   name: '',
  //   number: '',
  // };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeHandler = event => {
    // this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    if (event.currentTarget.name === 'name') {
      setName(event.currentTarget.value);
    } else {
      setNumber(event.currentTarget.value);
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    submitAction({name, number});
    // this.setState({
    //   name: '',
    //   number: '',
    // });
    setName('');
    setNumber('');
  };

  // render() {
    return (
      <form className={css.form} onSubmit={submitHandler}>
        <label className={css.element}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={changeHandler}
            className={css.input}
          />
        </label>
        <label className={css.element}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={changeHandler}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  // }
}

ContactForm.propTypes = {
  submitAction: PropTypes.func.isRequired,
};

export { ContactForm };
