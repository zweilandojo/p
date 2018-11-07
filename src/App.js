import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import AppHeader from './components/AppHeader/index.js'
import TaskLoading from './components/TaskLoading/index.js'

class AdminDashboards extends React.Component {
  render() {
    return (
      <div className="Admin">
        <AppHeader />
        <h1>Admin Dashboards</h1>
      </div>
    )
  }
}

class Loading extends React.Component {
  render() {
    return (
      <div className="Tasks-layout">
        <AppHeader />
        <TaskLoading />
      </div>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    My Home page!
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Loading}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/admin-dashboards" component={AdminDashboards}/>
        </div>
      </Router>
    );
  }
}

export default App;
