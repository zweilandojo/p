import React from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

// Components
import AdminAppHeader from '../../../../components/AppHeader/AdminAppHeader.js'
import Breadcrumbs2 from '../../../../components/Breadcrumbs/index2.js'
import TabBrokerageProfile from './TabBrokerageProfile.js'
import TabBrokerageAgents from './TabBrokerageAgents.js'

class BrokerageDetail extends React.Component {
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
          parentUrl="/admin-brokerages"
          parentPage="Brokerages"
          currentPage="Brokerage ID"
        />
        <div className="Admin-content">
          <div className="Card">
            <div className="Card-content">
              <div className="StatusPage-title ml-0">
                <div className="StatusPage-titlemain mb-2 mt-0">Brokerage</div>
                <div className="StatusPage-titlesub">Coldwell Banker United, Realtors</div>
              </div>
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
                    Agent
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                  >
                    Messages
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}
                  >
                    Actions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '5' })}
                    onClick={() => { this.toggle('5'); }}
                  >
                    Events
                  </NavLink>
                </NavItem>
              </Nav>

              <div className="overflow-y-auto">
                <div className="flex-no-shrink">
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <TabBrokerageProfile />
                    </TabPane>
                    <TabPane tabId="2">
                      <TabBrokerageAgents />
                    </TabPane>
                    <TabPane tabId="3">
                      <div className="overflow-y-auto">
                        <div className="flex-no-shrink">
                          <div className="JsonView flex flex-wrap">
                            <h2 className="">Messages</h2>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="4">
                      <div className="JsonView">
                        <h4>Actions</h4>
                      </div>
                    </TabPane>
                    <TabPane tabId="5">
                      <div className="JsonView">
                        <h4>Brokerage Events</h4>
                        <p className="">This table lists all events tracked by CPS: Messages, profile updates, tags, etc.</p>
                      </div>
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

export default BrokerageDetail;
