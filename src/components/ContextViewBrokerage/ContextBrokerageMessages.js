import React from 'react';
import { } from 'react-router-dom';

class ContextMessages extends React.Component {
  render() {
    return (
      <div className="relative">
        <div className="ContextView-MessagesSpacer"></div>
        <ul className="ContextView-Messages ContextView-Messages-Brokerage">

          <li className="ContextView-Message-Outgoing">
            <div className="ContextView-MessageView-Header">
            <div className="ContextView-MessageView-Header-name">OJO</div>
              <div className="ContextView-MessageView-Header-MessageTime">Nov 20, 12:37 pm</div>
            </div>
            <div className="ContextView-MessageView-content">
              Thanks everyone!
            </div>
          </li>

          <li className="ContextView-latestMessage">
            <div className="ContextView-Message-Incoming">
              <div className="ContextView-MessageView-Header">
                <div className="ContextView-MessageView-Header-name mr-2">Debbie Holder</div>
                <div className="ContextView-MessageView-Header-MessageTime text-grey">Nov 20, 10:45 am</div>
              </div>
            </div>
            <div className="ContextView-MessageView-content">Sounds good</div>
          </li>

          <li className="ContextView-latestMessage">
            <div className="ContextView-Message-Incoming">
              <div className="ContextView-MessageView-Header">
                <div className="ContextView-MessageView-Header-name mr-2">John Trang</div>
                <div className="ContextView-MessageView-Header-MessageTime text-grey">Nov 20, 9:55 am</div>
              </div>
            </div>
            <div className="ContextView-MessageView-content">Sounds good</div>
          </li>

          <li className="ContextView-latestMessage">
            <div className="ContextView-Message-Incoming">
              <div className="ContextView-MessageView-Header">
                <div className="ContextView-MessageView-Header-name mr-2">Matt Colaneri</div>
                <div className="ContextView-MessageView-Header-MessageTime text-grey">Nov 20, 9:45 am</div>
              </div>
            </div>
            <div className="ContextView-MessageView-content">All done!</div>
          </li>

          <li className="ContextView-Message-Incoming">
            <div className="ContextView-MessageView-Header">
            <div className="ContextView-MessageView-Header-name">John Thompson</div>
              <div className="ContextView-MessageView-Header-MessageTime">Nov 20, 9:02 am</div>
            </div>
            <div className="ContextView-MessageView-content">ok</div>
          </li>

          <li className="ContextView-Message-Incoming">
            <div className="ContextView-MessageView-Header">
            <div className="ContextView-MessageView-Header-name">Carol Alford</div>
              <div className="ContextView-MessageView-Header-MessageTime">Nov 20, 8:59 am</div>
            </div>
            <div className="ContextView-MessageView-content">Will do!</div>
          </li>

          <li className="ContextView-Message-Outgoing">
            <div className="ContextView-MessageView-Header">
            <div className="ContextView-MessageView-Header-name">OJO</div>
              <div className="ContextView-MessageView-Header-MessageTime">Nov 20, 8:37 am</div>
            </div>
            <div className="ContextView-MessageView-content">
              Hello -- we’re eager to hear from agents like you who are participating in our OJO leads program. Please take just 3-4 minutes over the next 48 hours to complete this survey and help us understand your experience so far: https://ojohome.typeform.com/to/boywpu
            </div>
          </li>

        </ul>
      </div>
    )
  }
}

export default ContextMessages;
