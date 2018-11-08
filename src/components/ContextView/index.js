import React from 'react';
import { } from 'react-router-dom';

// Imports
import ContextMessages from './ContextMessages.js'
import ContextAbout from './ContextAbout.js'
import ContextMissions from './ContextMissions.js'

let flexShrink = {
  flexShrink: '1'
}

class ContextView extends React.Component {
  render() {
    return (
      <div className="ContextView flex-shrink" style={flexShrink}>
        <div className="ContextView-header">
          <div>252f38b3-4d8d-4fc3-9480-69a57c493207</div>
          <div className="ContextView-subheader">
            <span>
              <a href="/admin-customers-detail" target="_blank">View in Admin Panel</a>
            </span>
            <span className="badge badge-pill badge-success">
              <i class="fa fa-check mr-2" aria-hidden="true"></i>
              Subscribed
            </span>
          </div>
        </div>
        <div className="ContextView-tabs">
          <div className="ContextView-tab ">Conversation</div>
          <div className="ContextView-tab ">About</div>
          <div className="ContextView-tab isActive">Missions</div>
        </div>
        <div className="ContextView-content">

          {/* <ContextMessages /> */}
          {/* <ContextAbout /> */}
          <ContextMissions />

        </div>
      </div>
    )
  }
}

export default ContextView;
