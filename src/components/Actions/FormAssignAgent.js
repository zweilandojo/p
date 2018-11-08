import React from 'react';
import { } from 'react-router-dom';

const FormAssignAgent = () => (
  <form className="">
    <div className="form-group row">
      <label labelFor="inputEmail3" className="col-sm-3 col-form-label">Select agent</label>
      <div className="col-sm-9">
      <select type="select" className="form-control" name="select" id="agentAssign">
        <option>Select an agent...</option>
        <option>Not part of agent matching</option>
        <option>Agent Name</option>
        <option>Agent Name</option>
        <option>Agent Name</option>
        <option>Agent Name</option>
        <option>Agent Name</option>
        <option>Agent Name</option>
        <option>Agent Name</option>
      </select>
      <p className="text-sm text-grey-dark mt-4 mb-1">If the brokerage is part of our Agent Matching process, you can assign their agents directly to customers. This will inform Realogy that the agent was assigned in the OJO system.</p>
      </div>
    </div>

  </form>
)

export default FormAssignAgent;
