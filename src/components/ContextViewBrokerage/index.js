import React from 'react'
import { } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'

// Components
import ContextBrokerageMessages from './ContextBrokerageMessages.js'

class ContextViewBrokerage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ContextView ContextView-Brokerage">
        <div className="ContextView-header pt-1 pb-0">
          <div className="ContextView-subheader">
          </div>
        </div>

        <div className="ContextView-tabs cursor-default">
          <div className="ContextView-tab text-dark cursor-default">
            Brokerage Messages
          </div>
        </div>
        <div className="ContextView-content relative">
          <ContextBrokerageMessages />

          <div className="input-group typeMessage-wrap">
            <input type="text" className="form-control" placeholder="Type a message..." />
            <div className="input-group-append">
              <button className="btn btn-primary" tabindex="-1">Send</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContextViewBrokerage;
