import React, { useState } from 'react';

function CheckIn() {
  const [guestId, setGuestId] = useState('');

  const checkInGuest = () => {
    alert(`Guest ${guestId} checked in.`);
  };

  return (
    <div className="checkIn-container">
      <h2>Check-In Guest</h2>
      <input value={guestId} onChange={e => setGuestId(e.target.value)} placeholder="Enter Name or Badge ID" />
      <button onClick={checkInGuest}>Check-In</button>
    </div>
  );
}

export default CheckIn;