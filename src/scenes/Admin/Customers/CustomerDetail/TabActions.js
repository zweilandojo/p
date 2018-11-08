import React from 'react'
import { } from 'react-router-dom'

// Components
import FormEditBasicPrefs from "../../../../components/Actions/FormEditBasicPrefs.js"
import FormSendMission from "../../../../components/Actions/FormSendMission.js"
import FormSendLink from "../../../../components/Actions/FormSendLink.js"
import FormAssignAgent from "../../../../components/Actions/FormAssignAgent.js"
import FormManageSubscription from "../../../../components/Actions/FormManageSubscription.js"

const TabActions = () => (
  <div className="overflow-y-auto">
    <div className="flex-no-shrink">
      <div className="JsonView">

        {/* Action: Send Mission */}
        <div className="card mb-8">
          <h5 className="card-header">Send Mission</h5>
          <div className="card-body">
            <FormSendMission />
            <hr/>
            <button type="submit" className="btn btn-primary">Send Mission</button>
          </div>
        </div>

        {/* Action: Send Link */}
        <div className="card mb-8">
          <h5 className="card-header">Send Link</h5>
          <div className="card-body">
            <FormSendLink />
            <hr/>
            <button type="submit" className="btn btn-primary">Send Link</button>
          </div>
        </div>

        {/* Action: Edit Basic Preferences */}
        <div className="card mb-8">
          <h5 className="card-header">Edit Basic Preferences</h5>
          <div className="card-body">
            <FormEditBasicPrefs />
            <hr/>
            <button type="submit" className="btn btn-success">Save Preferences</button>
          </div>
        </div>

        {/* Action: Edit Area Search */}
        <div className="card mb-8">
          <h5 className="card-header">Edit Area Search</h5>
          <div className="card-body">

          </div>
        </div>

        {/* Action: Assign Agent */}
        <div className="card mb-8">
          <h5 className="card-header">Assign Agent</h5>
          <div className="card-body">
            <FormAssignAgent />
            <hr/>
            <button type="submit" className="btn btn-primary">Assign Agent</button>
          </div>
        </div>

        {/* Action: Manage Subscription */}
        <div className="card mb-8">
          <h5 className="card-header">Manage Subscription</h5>
          <div className="card-body">
            <FormManageSubscription />
            <hr/>
            <button type="submit" className="btn btn-danger">Assign Agent</button>
          </div>
        </div>

        {/* Action: Spam / Toxic user */}
        <div className="card mb-8">
          <h5 className="card-header">Spam / Toxic User</h5>
          <div className="card-body">
            <p>Mark this customer as spam / toxic. This will unsubscribe them and prevent future messages from generating classification tasks for AITs.</p>
            <hr/>
            <button type="submit" className="btn btn-danger">Assign Agent</button>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default TabActions;
