import React from 'react';
import Navbar from './components/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
