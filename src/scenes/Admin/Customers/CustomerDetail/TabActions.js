import React from 'react'
import { } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';


// Components
import FormEditBasicPrefs from "../../../../components/Actions/FormEditBasicPrefs.js"
import FormSendMission from "../../../../components/Actions/FormSendMission.js"
import FormSendLink from "../../../../components/Actions/FormSendLink.js"
import FormAssignAgent from "../../../../components/Actions/FormAssignAgent.js"
import FormManageSubscription from "../../../../components/Actions/FormManageSubscription.js"
import FormEditAreaSearch from "../../../../components/Actions/FormEditAreaSearch.js"

const TabActions = () => (
  <div className="overflow-y-auto">
    <div className="flex-no-shrink row">
      <div className="JsonView col-sm-9">

        {/* Action: Send Mission */}
        <div className="card mb-8" id="FormSendMission">
          <h5 className="card-header">Send Mission</h5>
          <div className="card-body">
            <FormSendMission />
            <hr/>
            <button type="submit" className="btn btn-primary">Send Mission</button>
          </div>
        </div>

        {/* Action: Send Link */}
        <div className="card mb-8" id="FormSendLink">
          <h5 className="card-header">Send Link</h5>
          <div className="card-body">
            <FormSendLink />
            <hr/>
            <button type="submit" className="btn btn-primary">Send Link</button>
          </div>
        </div>

        {/* Action: Edit Basic Preferences */}
        <div className="card mb-8" id="FormEditBasicPrefs">
          <h5 className="card-header">Edit Basic Preferences</h5>
          <div className="card-body">
            <FormEditBasicPrefs />
            <hr/>
            <button type="submit" className="btn btn-success">Save Preferences</button>
          </div>
        </div>

        {/* Action: Edit Area Search */}
        <div className="card mb-8" id="FormEditAreaSearch">
          <h5 className="card-header">Edit Area Search</h5>
          <div className="card-body">
            <FormEditAreaSearch />
          </div>
        </div>

        {/* Action: Assign Agent */}
        <div className="card mb-8" id="FormAssignAgent">
          <h5 className="card-header">Assign Agent</h5>
          <div className="card-body">
            <FormAssignAgent />
            <hr/>
            <button type="submit" className="btn btn-primary">Assign Agent</button>
          </div>
        </div>

        {/* Action: Spam / Toxic user */}
        <div className="card mb-8" id="FormSpamUser">
          <h5 className="card-header">Spam / Toxic User</h5>
          <div className="card-body">
            <p>Mark this customer as spam / toxic.</p>
            <p>This will unsubscribe them and prevent future messages from generating classification tasks for AITs.</p>
            <hr/>
            <button type="submit" className="btn btn-danger">Block User</button>
          </div>
        </div>

        {/* Action: Manage Subscription */}
        <div className="card mb-8" id="FormManageSubscription">
          <h5 className="card-header">Manage Subscription</h5>
          <div className="card-body">
            <FormManageSubscription />
            <hr/>
            <button type="submit" className="btn btn-danger">Unsubscribe</button>
          </div>
        </div>

      </div>
      <div className="col-sm-3 mt-16">
        <h5>Actions</h5>
        <ul className="nav flex-column ml-0">
          <li className="nav-item">
            <Link to="#FormSendMission" className="nav-link p-0">Send Mission</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin-customers-detail#FormSendLink" className="nav-link p-0">Send Link</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin-customers-detail#FormEditBasicPrefs" className="nav-link p-0">Edit Basic Preferences</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin-customers-detail#FormEditAreaSearch" className="nav-link p-0">Edit Area Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin-customers-detail#FormAssignAgent" className="nav-link p-0">Assign Agent</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin-customers-detail#FormSpamUser" className="nav-link p-0">Spam User</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin-customers-detail#FormManageSubscription" className="nav-link p-0">Unsubscribe</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default TabActions;
