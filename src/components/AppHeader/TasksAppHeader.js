import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Assets
import ojoLogo from '../../assets/img/ojo-logo.png';

const TasksAppHeader = () => (
  <div className="Header navbar">
    <Link to="/" className="Header-logo">
      <img src={ojoLogo} alt="ojo labs logo" />
    </Link>
    <ul className="Header-right">
      <li>
        {/* <Link to="#/admin/dashboards/activity">Activity</Link> */}
        <Link to="/admin">Activity</Link>
      </li>
      <li className="img-circle Header-profile">
        {/* <FontAwesomeIcon icon="coffee" /> */}
      </li>
      <li>
        <button type="button" className="LinkButton">Logout</button>
      </li>
    </ul>
  </div>
)

export default TasksAppHeader;
