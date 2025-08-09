import React from 'react';
import '../styles/MacButton.css';

const MacButton = ({ href = '#', children }) => {
  return (
    <a href={href} className="btn-small">
      <span>{children}</span>
    </a>
  );
};

export default MacButton;
