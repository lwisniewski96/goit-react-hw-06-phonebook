import PropTypes from 'prop-types';
import { useState } from 'react';

function ContactForm({ onAddContact }) {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(formData.name, formData.number);
    setFormData({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
