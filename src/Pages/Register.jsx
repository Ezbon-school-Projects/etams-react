import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ name: '', organization: '', contact: '', email : '', type: 'Student' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerGuest = () => {
    alert(`Guest ${form.name} registered successfully.`);
  };

  return (
    <div className="register-container">
      <h2>Guest Registration</h2>
      <div className='register-form'>
        <label className='label' htmlFor='name'>Full Name:</label>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <label className='label' htmlFor='name'>email:</label>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <label className='label' htmlFor='organisation'>Organiation</label>
        <input name="organization" placeholder="Organization" onChange={handleChange} />
        <label className='label' htmlFor='contact:'>Contact</label>
        <input name="contact" placeholder="Contact Info" onChange={handleChange} />
        <p>Guest Type</p>
        <select name="type" onChange={handleChange}>
          <option value="Student">Student</option>
          <option value="VIP">VIP</option>
        </select>
        <p>Select Session</p>
        <div className='session-container'>
          <label>Session A</label>
          <input type="radio" name="session" value="A" />
          <label>Session B</label>
          <input type="radio" name="session" value="B" />
          <label>Session C</label>
          <input type="radio" name="session" value="C" />
        </div>

        <button className="register-guest-submit-button" onClick={registerGuest}>Submit</button>
      </div>
    </div>
  );
}

export default Register;