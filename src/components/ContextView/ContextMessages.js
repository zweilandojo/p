import React from 'react';
import { } from 'react-router-dom';

class ContextMessages extends React.Component {
  render() {
    return (
      <div>
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
    )
  }
}

export default ContextMessages;
