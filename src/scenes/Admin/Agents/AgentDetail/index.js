import React from 'react';
import { } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

// Components
import AdminAppHeader from '../../../../components/AppHeader/AdminAppHeader.js'
import Breadcrumbs2 from '../../../../components/Breadcrumbs/index2.js'
import ContextView from '../../../../components/ContextView/index.js'
import TabAgentProfile from './TabAgentProfile.js'
import TabAgentActions from './TabAgentActions.js'
import TabAgentEvents from './TabAgentEvents.js'

class AgentDetail extends React.Component {
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
      <div className="Admin">
        <AdminAppHeader />
        <Breadcrumbs2
          parentUrl="/admin-agents"
          parentPage="Agents"
          currentPage="Agents"
        />
        <div className="Admin-content">
          <ContextView />
          <div className="Card ml-5">
            <div className="Card-content">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Actions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                  >
                    Events
                  </NavLink>
                </NavItem>
              </Nav>

              <div className="overflow-y-auto">
                <div className="flex-no-shrink">

                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <TabAgentProfile />
                    </TabPane>
                    <TabPane tabId="2">
                      <TabAgentActions />
                    </TabPane>
                    <TabPane tabId="3">
                      <TabAgentEvents />
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default AgentDetail;
