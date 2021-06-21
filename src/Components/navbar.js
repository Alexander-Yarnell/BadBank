import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="navbar-brand" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to='/create-account'>Create Account</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to='/login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to='/deposit'>Deposit</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to='/withdraw'>Withdraw</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to='/all-data'>All Data</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Nav;
