import React from 'react'
import { } from 'react-router-dom'

// Components
import FormEditBasicPrefs from "../../../../components/Actions/FormEditBasicPrefs.js"
import FormSendMission from "../../../../components/Actions/FormSendMission.js"

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
            <p>If the brokerage is part of our AgentMatching process, you can assign their agents directly to customers. This will inform Realogy that the agent was assigned in the OJO system.</p>
            <form>
              <div>
                <div class="form-group row">
                  <label for="agent" class="col-sm-3 col-form-label">Select new agent</label>
                  <div class="col-sm-9">
                    <select class="form-control" disabled="">
                      <option value="">Customer’s brokerage is not part of Agent Matching</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-10">
                  <button type="button" class="btn btn-primary" disabled="">Assign to agent</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Action: Manage Subscription */}
        <div className="card mb-8">
          <h5 className="card-header">Assign Agent</h5>
          <div className="card-body">
          </div>
        </div>
        {/* Action: Spam / Toxic user */}
        <div className="card mb-8">
          <h5 className="card-header">Assign Agent</h5>
          <div className="card-body">
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default TabActions;
