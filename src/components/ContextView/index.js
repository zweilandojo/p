import React from 'react'
import { } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'

// Imports
import ContextMessages from './ContextMessages.js'
import ContextAbout from './ContextAbout.js'
import ContextMissions from './ContextMissions.js'

let flexShrink = {
  flexShrink: '1'
}

class ContextView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="ContextView flex-shrink" style={flexShrink}>
        <div className="ContextView-header">
          <div>252f38b3-4d8d-4fc3-9480-69a57c493207</div>
          <div className="ContextView-subheader">
            <span>
              <a href="/admin-customers-detail" target="_blank">View in Admin Panel</a>
            </span>
            <span className="badge badge-pill badge-success">
              <i class="fa fa-check mr-2" aria-hidden="true"></i>
              Subscribed
            </span>
          </div>
        </div>


        <div className="ContextView-tabs">
          <Nav tabs>
            <NavItem className="ContextView-tab">
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Conversation
              </NavLink>
            </NavItem>
            <NavItem className="ContextView-tab">
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem className="ContextView-tab">
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                Missions
              </NavLink>
            </NavItem>
          </Nav>
          {/*
          <div className="ContextView-tab ">Conversation</div>
          <div className="ContextView-tab ">About</div>
          <div className="ContextView-tab isActive">Missions</div>
          */}
        </div>
        <div className="ContextView-content">
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <ContextMessages />
            </TabPane>
            <TabPane tabId="2">
              <ContextAbout />
            </TabPane>
            <TabPane tabId="3">
              <ContextMissions />
            </TabPane>
          </TabContent>
        </div>
      </div>
    )
  }
}

export default ContextView;
