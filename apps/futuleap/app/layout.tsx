import React from 'react';
import './global.css';
import '../public/styles/fonts.css';
import dynamic from 'next/dynamic';


const RocketComponent = dynamic(
  () => import('./rocket-component'),
  { ssr: false }
);

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      {children}
      {/*<RocketComponent/>*/}
    </>
  );
}
