import { useState, useRef } from 'react';
import api from '../../api';

function Contact() {
  const [name, setName] = useState('Tomek');
  const [surname, setSurname] = useState('');

  const nameInputRef = useRef(null);
  const nameInputErrorLabelRef = useRef(null);
  const buttonRef = useRef(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'name') { // TODO: refactors
      setName(value);
    } else if (name === 'surname') {
      setSurname(value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    nameInputRef.current.style.border = '#f00 1px solid';
    nameInputRef.current.value = '';
    if (name === '') {
        nameInputErrorLabelRef.current.style.display = 'block';
    } 
    else {
        api.post('/users',{
            name, surname
        });
    }
  };

  return (
    <div className="centerElement">
      <h1>Hi {name} {surname}!</h1>
        <form onSubmit={handleSubmit} className="formInput">
          <input
            type="text"
            name="name"
            ref={nameInputRef}
            defaultValue={name}
            onChange={handleChange} />
          <div ref={nameInputErrorLabelRef} style={{ display: 'none' }}>Field is required</div>
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={handleChange} />
            <br />
          <input
            type="submit"
            value="Send"
            ref={buttonRef}
            onMouseOver={() => buttonRef.current.style.backgroundColor = '#00f'}
            onMouseOut={() => buttonRef.current.style.backgroundColor = '#0f0'} />
        </form>
    </div>
  );
}

export default Contact;