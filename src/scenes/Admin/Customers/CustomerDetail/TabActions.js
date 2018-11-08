import React from 'react';
import { } from 'react-router-dom';

const TabAgent = () => (
  <div className="overflow-y-auto">
    <div className="flex-no-shrink">
      <div className="JsonView">
        <h2>Agent Information</h2>
        <p>This customer does not have an assigned agent</p>
        <div>
          <h3 className="mt-6">
            Brokerage Information
            <button className="btn btn-link">view json</button>
          </h3>
          <div className="mt-6">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>External Id</th>
                  <th>Lead System</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Better Homes and Gardens Metro Brokers</td>
                  <td>400019</td>
                  <td>leadrouter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card">
          <h5 className="card-header">
          Assign Agent</h5>
          <div className="card-body">
          <p>If the brokerage is part of our AgentMatching process, you can assign their agents directly to customers. This will inform Realogy that the agent was assigned in the OJO system.</p><form><div><div class="form-group row"><label for="agent" class="col-sm-3 col-form-label">Select new agent</label><div class="col-sm-9"><select class="form-control" disabled="">
          <option value="">Customer’s brokerage is not part of Agent Matching</option>
          </select>
          </div>
          </div>
          </div>
          <div class="form-group row">
          <div class="col-sm-10">
          <button type="button" class="btn btn-primary" disabled="">Assign to agent</button></div></div></form></div></div>
        </div>
      </div>
    </div>
  </div>
)

export default TabAgent;
