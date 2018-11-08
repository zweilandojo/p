import React from 'react';
import { } from 'react-router-dom';

const FormSendHoldMsg = () => (
  <form className="">
    <p className="text-sm">This action will send a message to the customer without closing the task.</p>
    <div className="form-group">
      <textarea className="form-control" id="holdMessage" rows="3" placeholder="Write your hold message..."></textarea>
    </div>

  </form>
)

export default FormSendHoldMsg;
