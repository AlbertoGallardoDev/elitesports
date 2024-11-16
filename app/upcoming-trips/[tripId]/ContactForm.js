'use client';

import { useState } from 'react';
import tripsOptions from '../../../public/tripsOptions.json'; // Importa el JSON con los viajes

const ContactForm = ({ tripTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    trip: tripTitle || '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container-fluid mt-5">
      <h2>Are you interested in joining us?</h2>

      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="trip">Choose the trip *</label>
        <select
          id="trip"
          name="trip"
          className="form-control"
          value={formData.trip}
          onChange={handleChange}
          required
        >
          <option value="">Choose an option</option>
          {tripsOptions.map((trip) => (
            <option key={trip.id} value={`${trip.name} (${trip.dates})`}>
              {trip.name} ({trip.dates})
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          I accept being contacted by Elite Sports Trips
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Contact me
      </button>
    </form>
  );
};

export default ContactForm;
