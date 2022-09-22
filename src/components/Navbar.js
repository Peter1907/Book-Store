import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'lightgrey',
  };

  return (
    <div className="nav-bar">
      <h1 style={{ margin: 0 }}>PB Bookstore</h1>
      <Link style={linkStyle} to="/">BOOKS</Link>
      <Link style={linkStyle} to="/categories">CATEGORIES</Link>
    </div>
  );
}

export default Navbar;
