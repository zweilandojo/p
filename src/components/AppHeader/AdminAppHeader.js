import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Assets
import ojoLogo from '../../assets/img/ojo-logo.png';

const AdminAppHeader = () => (
  <div className="Header navbar">
    <Link to="/" className="Header-logo">
      <img src={ojoLogo} alt="ojo labs logo" />
    </Link>
    <ul className="Header-right">
      <li className="img-circle Header-profile">
        <i className="fa fa-user"></i>
      </li>
      <li>
        <button type="button" className="LinkButton">Logout</button>
      </li>
    </ul>
  </div>
)

export default AdminAppHeader;
