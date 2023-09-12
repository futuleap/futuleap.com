import React from 'react';
import './global.css';
import '../public/styles/fonts.css';


export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      {children}
    </>
  );
}
