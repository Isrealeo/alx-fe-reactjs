// src/components/UserProfile.jsx
import React from 'react';

function UserProfile(props) {
  return (
    <div style={{
      border: '2px solid gray',
      borderRadius: '8px',
      padding: '15px',
      margin: '15px',
      maxWidth: '300px',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '10px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
      <p>Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span></p>
    </div>
  );
}

export default UserProfile;
