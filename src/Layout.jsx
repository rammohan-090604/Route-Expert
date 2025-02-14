import React from 'react';
import Navbar from './pages/navbar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../src/hooks/ScrollToTop'

const Layout = () => {
  return (
    <div className='font-san font-normal tracking-wide'>
      <Navbar />
      <ScrollToTop />
      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
