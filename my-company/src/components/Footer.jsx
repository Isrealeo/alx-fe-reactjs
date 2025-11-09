// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
      marginTop: '30px'
    }}>
      <p>© 2025 My React App. All rights reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#3b5998', margin: '0 10px', textDecoration: 'none' }}
        >
          Facebook
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#1da1f2', margin: '0 10px', textDecoration: 'none' }}
        >
          Twitter
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0077b5', margin: '0 10px', textDecoration: 'none' }}
        >
          LinkedIn
        </a>
      </div>
      <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#ccc' }}>
        Made with ❤️ using React
      </p>
    </footer>
  );
}

export default Footer;
