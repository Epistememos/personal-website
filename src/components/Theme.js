import React from 'react';
import './Theme.css';

function Theme() {
  const handleThemeToggle = () => {
    const htmlElement = document.querySelector('html');
    const currentTheme = htmlElement.getAttribute('data-theme');

    // Toggle between 'light' and 'dark' themes
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className='theme-toggle'>
      <input
        type="checkbox"
        id="theme-toggle"
        onChange={handleThemeToggle}
      />
      <label htmlFor="theme-toggle"></label>
    </div>
  );
}

export default Theme;
