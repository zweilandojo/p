import React from 'react';
import { } from 'react-router-dom';

const FormManageSubscription = () => (
  <div className="">
    <p>Set user as subscribed / unsubscribed.</p>
    <div className="form-group row">
      <label labelFor="optionalMsg" className="col-sm-3 col-form-label">Message</label>
      <div className="col-sm-9">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Optional"></textarea>
      </div>
    </div>
  </div>
)

export default FormManageSubscription;
