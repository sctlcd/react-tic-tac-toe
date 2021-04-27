import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

export default function Footer() {
  // Render Footer component
  return (
    <div className='footer'>
    <p> Tic-Tac-Toe
    <FontAwesomeIcon className='icon' icon={['far', 'copyright']} />
      2021 by Lucinda Souchet
      <a href="https://github.com/sctlcd" target="_blank" rel="noreferrer">
      <FontAwesomeIcon className='icon github' icon={['fab', 'github']} />
      </a>
    </p>
    </div>
  );
}
