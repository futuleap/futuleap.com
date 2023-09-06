// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"use client"
import React, { useEffect } from 'react';


const RocketComponent: React.FC = () => {
  useEffect(() => {
    const rocket = document.querySelector('.rocket-icon');

    if (rocket) {
      const randomDuration = Math.random() * 10 + 5;
      const randomDelay = 1;

      rocket.style.animationDuration = `${randomDuration}s`;
      rocket.style.animationDelay = `${randomDelay}s`;
    }
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
      <path fill="#00FBA9" d="M16 0 C20 0, 24 8, 24 16 C24 24, 20 32, 16 32 C12 32, 8 24, 8 16 C8 8, 12 0, 16 0 Z"/>

      <circle cx="16" cy="12" r="4" fill="#fff"/>

      <path fill="#f00" d="M16 32 C18 36, 20 38, 20 40 C20 42, 18 44, 16 44 C14 44, 12 42, 12 40 C12 38, 14 36, 16 32 Z"/>
    </svg>
  );
}

export default RocketComponent;
