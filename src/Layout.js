import React from 'react';
import Footer from './footer'; // make sure path is correct
import './App.css'; // includes .page-wrapper styling

function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
