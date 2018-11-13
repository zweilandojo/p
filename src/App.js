import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import TasksAppHeader from './components/AppHeader/TasksAppHeader.js'
import TaskLoading from './components/TaskLoading/index.js'

// Scenes
import AdminDashboards from './scenes/Admin/Dashboards/index.js'
import AdminCustomers from './scenes/Admin/Customers/index.js'
import AdminCustomersDetail from './scenes/Admin/Customers/CustomerDetail/index.js'
import AdminAgents from './scenes/Admin/Agents/index.js'
import AdminBrokerages from './scenes/Admin/Brokerages/index.js'
import AdminBrokerageDetail from './scenes/Admin/Brokerages/BrokerageDetail/index.js'
import AdminUsers from './scenes/Admin/Users/index.js'
import TaskDetail from './scenes/Tasks/TaskDetail/index.js'


class Loading extends React.Component {
  render() {
    return (
      <div className="Tasks-layout">
        <TasksAppHeader />
        <TaskLoading />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Loading}/>
          <Route exact path="/admin" component={AdminDashboards}/>
          <Route exact path="/admin-customers" component={AdminCustomers}/>
          <Route exact path="/admin-customers-detail" component={AdminCustomersDetail}/>
          <Route exact path="/admin-agents" component={AdminAgents}/>
          <Route exact path="/admin-brokerages" component={AdminBrokerages}/>
          <Route exact path="/admin-brokerage-detail" component={AdminBrokerageDetail}/>
          <Route exact path="/admin-users" component={AdminUsers}/>
          <Route exact path="/tasks-task-detail" component={TaskDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
