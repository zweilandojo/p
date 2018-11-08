import React from 'react';
import { } from 'react-router-dom';

class ContextAbout extends React.Component {
  render() {
    return (
      <div>
        <div className="ContextView-factgroup">
          <h4>Basic Info</h4>
          <div className="ContextView-fact">
            <span>OJO Number</span>
            <span>+12408443176</span>
          </div>
          <div className="ContextView-fact">
            <span>Market</span>
            <span>Austin</span>
          </div>
          </div>
        <div className="ContextView-factgroup">
          <h4>Agent / Brokerage</h4>
          <div className="ContextView-fact">
            <span>Agent Name</span>
            <span>No agent assigned</span>
          </div>
          <div className="ContextView-fact">
            <span>Agent’s Phone</span>
            <span>None found</span>
          </div>
          <div className="ContextView-fact">
            <span>Brokerage</span>
            <a href="/#/admin/brokerages/cb54c0a7-2eb2-4e96-bd61-7a838f452d74" target="_blank">Better Homes and Gardens Metro Brokers</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ContextAbout;
