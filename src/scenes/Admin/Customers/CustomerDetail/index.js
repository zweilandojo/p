import React from 'react';
import { } from 'react-router-dom';

// Components
import AdminAppHeader from '../../../../components/AppHeader/AdminAppHeader.js'
import Breadcrumbs2 from '../../../../components/Breadcrumbs/index2.js'

let flexShrink = {
  flexShrink: '1'
}

class CustomerDetail extends React.Component {
  render() {
    return (
      <div className="Admin">
        <AdminAppHeader />
        <Breadcrumbs2
          parentUrl="/admin-customers"
          parentPage="Customers"
          currentPage="Customer ID"
        />
        <div className="Admin-content">
          <div className="ContextView flex-shrink" style={flexShrink}>
            <div className="ContextView-header">
              <div>252f38b3-4d8d-4fc3-9480-69a57c493207</div>
              <div className="ContextView-subheader">
                <span>
                  <a href="/#/admin/customers/252f38b3-4d8d-4fc3-9480-69a57c493207" target="_blank">View in Admin Panel</a>
                </span>
                <span className="badge badge-pill badge-success">
                  <i class="fa fa-check" aria-hidden="true"></i>
                    &nbsp; Subscribed
                  </span>
                </div>
            </div>
            <div className="ContextView-tabs">
              <div className="ContextView-tab isActive">Conversation</div>
              <div className="ContextView-tab ">About</div>
              <div className="ContextView-tab ">Missions</div>
            </div>
            <div className="ContextView-content">
              <div className="ContextView-MessagesSpacer"></div>
              <ul className="ContextView-Messages">

                <li className="ContextView-latestMessage">
                  <div className="ContextView-latestMessageIndicator">
                    <div className="Pill Pill-primary">
                      <span>Latest message</span>
                    </div>
                  </div>
                  <div className="ContextView-Message-Incoming">
                    <div className="ContextView-MessageView-Header">
                      <div className="ContextView-MessageView-Header-name">User</div>
                      <div className="ContextView-MessageView-Header-MessageTime">Nov 6th, 8:37 am</div>
                    </div>
                  </div>
                  <div className="ContextView-MessageView-content">Hello Jane</div>
                </li>

                <li className="ContextView-Message-Outgoing">
                  <div className="ContextView-MessageView-Header">
                  <div className="ContextView-MessageView-Header-name">OJO</div>
                    <div className="ContextView-MessageView-Header-MessageTime">Nov 6th, 8:37 am</div>
                  </div>
                  <div className="ContextView-MessageView-content">Hello Patrick</div>
                </li>
                <li className="ContextView-Message-Outgoing">
                  <div className="ContextView-MessageView-Header">
                  <div className="ContextView-MessageView-Header-name">OJO</div>
                    <div className="ContextView-MessageView-Header-MessageTime">Nov 6th, 8:37 am</div>
                  </div>
                  <div className="ContextView-MessageView-content">
                    https://ojo.page.link/pENdjego9PfzvNxz7
                  </div>
                </li>
                <li className="ContextView-Message-Outgoing">
                  <div className="ContextView-MessageView-Header">
                  <div className="ContextView-MessageView-Header-name">OJO</div>
                    <div className="ContextView-MessageView-Header-MessageTime">Nov 6th, 8:37 am</div>
                  </div>
                  <div className="ContextView-MessageView-content">
                    Hey, it's OJO! I want you to think of me as your virtual assistant. I work with Better Homes and Gardens Metro Brokers to help with all things real estate. To start, I'd love to learn more about you. Tap to get started! (Reply HELP for help, STOP to cancel, msg&data rates apply)
                  </div>
                </li>
                <li className="ContextView-Message-Outgoing">
                  <div className="ContextView-MessageView-Header">
                  <div className="ContextView-MessageView-Header-name">OJO</div>
                    <div className="ContextView-MessageView-Header-MessageTime">Nov 6th, 8:37 am</div>
                  </div>
                  <div className="ContextView-MessageView-content">
                    https://ojo.page.link/6mnVvYqm83jMSEXT7
                  </div>
                </li>
                <li className="ContextView-Message-Outgoing">
                  <div className="ContextView-MessageView-Header">
                  <div className="ContextView-MessageView-Header-name">OJO</div>
                    <div className="ContextView-MessageView-Header-MessageTime">Nov 6th, 8:37 am</div>
                  </div>
                  <div className="ContextView-MessageView-content">
                    https://goo.gl/fZS6YK
                  </div>
                </li>
                <li className="ContextView-Message-Outgoing">
                  <div className="ContextView-MessageView-Header">
                  <div className="ContextView-MessageView-Header-name">OJO</div>
                    <div className="ContextView-MessageView-Header-MessageTime">Nov 6th, 8:37 am</div>
                  </div>
                  <div className="ContextView-MessageView-content">
                    https://ojo.page.link/WcpmLuEn232DkL8A9
                  </div>
                </li>

              </ul>
              <div className="input-group no-shrink p-4">
              <input type="text" className="form-control" value="" />
              <div className="input-group-append">
                <button className="btn btn-primary" tabindex="-1">Send message</button>
              </div>
            </div>
            </div>
          </div>
          <div className="Card ml-5">
            <div className="Card-content">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <div data-tab="Profile" className="nav-link active ">
                    Profile
                  </div>
                </li>
                <li className="nav-item">
                  <div data-tab="Profile" className="nav-link">
                    Agent
                  </div>
                </li>
                <li className="nav-item">
                  <div data-tab="Profile" className="nav-link">
                    Actions
                  </div>
                </li>
                <li className="nav-item">
                  <div data-tab="Profile" className="nav-link">
                    HomeFit
                  </div>
                </li>
                <li className="nav-item">
                  <div data-tab="Profile" className="nav-link">
                    Events
                  </div>
                </li>
                <li className="nav-item">
                  <div data-tab="Profile" className="nav-link">
                    MLS
                  </div>
                </li>
                <li className="nav-item">
                  <div data-tab="Profile" className="nav-link">
                    Missions
                  </div>
                </li>
                <li className="nav-item">
                  <div data-tab="Profile" className="nav-link">
                    Tasks
                  </div>
                </li>
              </ul>
              <div className="overflow-y-auto">
                <div className="flex-no-shrink">
                  <div className="JsonView">
                    <h2>
                      Customer Profile
                      <button className="btn btn-link">view json</button>
                    </h2>
                    <div>
                      <h3 className="mt-6">
                        Customer Record
                      </h3>
                      <table className="table table-bordered table-hover table-sm">
                        <tbody>
                          <tr>
                            <td>id</td>
                            <td>252f38b3-4d8d-4fc3-9480-69a57c493207</td>
                          </tr>
                          <tr>
                            <td>phoneNumber</td>
                            <td>+15128147286</td>
                          </tr>
                          <tr>
                            <td>createdAt</td>
                            <td>2018-11-06T14:37:24.051328Z</td>
                          </tr>
                          <tr>
                            <td>updatedAt</td>
                            <td>2018-11-06T20:00:24.854824Z</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CustomerDetail;
