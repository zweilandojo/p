import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import TasksAppHeader from './components/AppHeader/TasksAppHeader.js'
import TaskLoading from './components/TaskLoading/index.js'

// Scenes
import AdminDashboards from './scenes/Admin/Dashboards/index.js'

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
          <Route exact path="/admin-dashboards" component={AdminDashboards}/>
        </div>
      </Router>
    );
  }
}

export default App;
