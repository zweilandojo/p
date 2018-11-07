import React from 'react';
import { } from 'react-router-dom';

// Components
import AdminAppHeader from '../../../components/AppHeader/AdminAppHeader.js'

let cardStyle = {
  margin: "auto",
  width: "400px",
  padding: "50px"
}

const AdminDashboards = () => (
  <div className="Admin">
    <AdminAppHeader />
    <div className="Admin-content">
      <div className="Card " style={cardStyle}>
        <div className="Card-content">
          <dl>
            <dt>Profiles</dt>
            <dd>
              <ul>
                <li><a href="/admin-customers">Customers</a></li>
                <li><a href="/admin-agents">Agents</a></li>
                <li><a href="/admin-brokerages">Brokerages</a></li>
              </ul>
            </dd>
            <dt>Tasks System</dt>
              <dd>
                <ul>
                  <li><a href="/admin/tasks">Tasks List</a></li>
                  <li><a href="/admin/tasks/remaining-tasks">Remaining tasks</a></li>
                  <li><a href="/admin/tasks/special-actions">Super Special Actions</a></li>
                </ul>
              </dd>
            <dt>Dashboards</dt>
            <dd>
              <ul>
                <li><a href="/admin/dashboards/activity">AIT Activity</a></li>
                <li><a href="/admin/dashboards/interview">Interviews table</a></li>
                <li><a href="/admin/dashboards/efficiency">Tasks Efficiency</a></li>
                <li><a href="/admin/dashboards/tagged-messages">Tagged messages</a></li>
                <li><a href="/admin/dashboards/agent-matching">Agent matching</a></li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
)

export default AdminDashboards;
