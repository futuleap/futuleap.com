import React from 'react';
import './global.scss';
import dynamic from 'next/dynamic';

const BackgroundEffect = dynamic(
  () => import('../components/background-effect'),
  { ssr: false }
);

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <BackgroundEffect />
      {children}
    </>
  );
}
