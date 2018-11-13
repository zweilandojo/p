import React from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

// Components
import AdminAppHeader from '../../../../components/AppHeader/AdminAppHeader.js'
import Breadcrumbs2 from '../../../../components/Breadcrumbs/index2.js'
import TabBrokerageProfile from './TabBrokerageProfile.js'
import TabBrokerageAgents from './TabBrokerageAgents.js'

// import TabActions from './TabActions.js'
// import FormSearchMLS from '../../../../components/Actions/FormSearchMLS.js'

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
                <div className="StatusPage-titlemain">Brokerages</div>
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
                      <Col sm="12">
                        <TabBrokerageProfile />
                      </Col>
                    </TabPane>
                    <TabPane tabId="2">
                      <Col sm="12">
                        <TabBrokerageAgents />
                      </Col>
                    </TabPane>
                    <TabPane tabId="3">
                      <Col sm="12">
                        {/* <TabActions /> */}
                      </Col>
                    </TabPane>
                    <TabPane tabId="4">
                      <Col sm="12">
                        <div className="JsonView">
                          <h4>HomeFit Contents</h4>
                        </div>
                      </Col>
                    </TabPane>
                    <TabPane tabId="5">
                      <Col sm="12">
                        <div className="JsonView">
                          <h4>Brokerage Events</h4>
                          <p className="">This table lists all events tracked by CPS: Messages, profile updates, tags, etc.</p>
                        </div>
                      </Col>
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
